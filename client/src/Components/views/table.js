import React from 'react'

const Row = ({name, url, desc, created_at, stargazers_count,language,size}) => (
  <div className="row">
    <div>{name.replace("_"," ")}</div>
    <div><a href={url}>  Link   </a> </div>
    <div>{desc}</div>
    <div>{created_at}</div>    
    <div>{stargazers_count}</div>
    <div>{language}</div>
    <div>{size}</div>
  </div>
  
);

/*
  Table component written as an ES6 class
*/
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    
    // http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    // bind the context for compareBy & sortBy to this component instance
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row key={rowData.name}{...rowData} />);

    return (
      <div className="table">
         <div className="header">
          <div onClick={() => this.sortBy('name')} >Name</div>
          <div onClick={() => this.sortBy('url')}>URL</div>
          <div onClick={() => this.sortBy('desc')}>Description</div>
          <div onClick={() => this.sortBy('created_at')}>Created On</div>
          <div onClick={() => this.sortBy('stargazers_count')}>Star</div>
          
          <div onClick={() => this.sortBy('language')}>Language</div>
          
          <div onClick={() => this.sortBy('size')}> Size</div>
        </div>
        
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}

export default Table;