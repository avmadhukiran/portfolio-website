"use strict";
// import * as config from './_config/config.js'
const express = require('express');
const app = express();
const axios = require('axios')
const JSON = require('circular-json');
const cookieParser = require("cookie-parser")
const config = require('./config/auth')
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');
var partials = require('express-partials');

var session = require('express-session');

var methodOverride = require('method-override');
var bodyParser = require('body-parser');
const url = require('url');
// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/static'));

const env = "development"

var GITHUB_CLIENT_ID = config[env].GITHUB_CLIENT_ID
var GITHUB_CLIENT_SECRET = config[env].GITHUB_CLIENT_SECRET;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:5000/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's GitHub profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the GitHub account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

app.get('/', (req, res) => {
    res.render('pages/index',{ user: req.user });
});

app.get('/login', function (req, res) {
    console.log("login")
    res.render('pages/index', {
        user: req.user
    });
});

app.get('/auth/github',
    passport.authenticate('github', {
        scope: ['user:email']
    }),
    function (req, res) {
        // The request will be redirected to GitHub for authentication, so this
        // function will not be called.
    });

app.get('/auth/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        console.log(req.query.code)
        let code = req.query.code
        axios.post('https://github.com/login/oauth/access_token',{
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code: code.toString()
          })
        .then(function (response) {
            // handle success
            console.log(response.data)
        })
        res.redirect('/');
    });

// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });

app.get('/repos', (req, res) => {
    var githuburi = 'https://api.github.com/users/avmadhukiran/repos'
    axios.get(githuburi)
        .then(function (response) {
            // handle success
            let result = []
            response.data.map(proj => {
                result.push({
                    name: proj.name,
                    url: proj.html_url,
                    desc: proj.description,
                    created_at: proj.created_at,
                    stargazers_count: proj.stargazers_count,
                    language: proj.language,
                    size: proj.size
                })
            })
            res.send(JSON.stringify(result))
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
});

app.listen(5000);

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}