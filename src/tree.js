import React, { Component } from 'react';
//import data from "./data.json";

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.root;
    this.items = this.props.items;
    this.deleteEmployee = this.props.deleteEmployee;
  }

  handleClick() {
   alert("hi");
  }

  render() {
    let item = this.items[this.id];
    return (
      <li>
        <div className="employeeTile">
          <div className="employee-details">

            <div className="name">{item.name}</div>
            <p className="title">EMP ID: {item.id}</p>
            <p className="title">{item.title}</p>
            <button className="button" onClick={() => {this.deleteEmployee(item.id)}}>
              Delete
            </button>
            <p>{item.errormessage}</p>
          </div>
        </div>
        
          {item.reportees.length >0 && 
            <ul>
              {item.reportees.map((item) => (
                <Tree key={item} root = {item} items= {this.items} deleteEmployee= {this.deleteEmployee}/>
              ))}
            </ul>
          }
      </li>
    )
  }
}