import React from 'react'
import Tree from "./tree";
import AddEmployee from './AddEmployee';
//import data from "./data.json";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.count =1;
  }

  state = {
    employees : {
      1: { id:1,name: 'Mukesh Ambani', title:'CEO', superiorID: 0, reportees: [] }
    }
  }

  AddEmployee = (name,title,superiorID) => {

    let employeesList = this.state.employees;

    if(superiorID > this.count || employeesList[superiorID] === undefined ){
      let err= "No employee exists with this ID";
      alert(err);
      return;
    }

    ++this.count;
    employeesList[superiorID].reportees.push(this.count);

    var newEmployee = { 
        id: this.count,
        name: name,
        title: title,
        superiorID: superiorID
    }

    newEmployee.reportees = [];
    employeesList[newEmployee.id] = newEmployee;
    
    this.setState({
      employees: employeesList
    })
  }

  deleteEmployee =(id) =>{

    let employeesList = this.state.employees;
    let employeeDetails = employeesList[id];

    if(employeeDetails.superiorID === 0){
      let err= "You don't have permissions to delete this employee";
      alert(err);
      return;
    }

    if(employeeDetails && employeeDetails.reportees.length === 0){
      delete employeesList[id];
      let reportees = employeesList[employeeDetails.superiorID].reportees;
      var newArray = reportees.filter(e => e !== id);
      employeesList[employeeDetails.superiorID].reportees = newArray;
    }else{
      let err= "We have reportees for this employee. Please make sure no reprtess before deleteing the employee";
      alert(err);
      return;
    }

    this.setState({
      employees: employeesList
    })
  }
  render() {
    var root = 1;
    return (
      <div className="container">
        <div className="org-tree">
          <AddEmployee  AddEmployee= {this.AddEmployee}/>
          <ul>
            <Tree key={this.state.employees[1].id} root = {root} items= {this.state.employees} deleteEmployee= {this.deleteEmployee}/>
          </ul>
        </div>
      </div>
    )
  }
}
