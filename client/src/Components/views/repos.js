import React, { Component } from 'react';
import Table from './table';


class Repos extends Component {  
  
  state = {
    data: []
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => {
        this.setState({ data: res });
        }
        )
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/repos');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const { data } = this.state;
    if (!data.length) return ''
    return (
      <React.Fragment>
      <div id="repos" className="row item">
        {this.state && <Table data={this.state.data}/> }
        </div>
        <div className = "row item" style={{position: "relative", top:"50%",left:"50%",}}><a className=" icon-down-circle" href="https://github.com/avmadhukiran/" role="button">Learn More</a></div>  

      </React.Fragment>
       );
  }
}

export default Repos;