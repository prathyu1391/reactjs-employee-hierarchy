import React, { Component } from 'react';

class AddEmployee extends Component{
	state = {
		name:null,
		title:null,
		superiorID:null,
		errormessage: ''
	}

	handleChange = (event) =>{
		let fieldName = event.target.id;
    	let enteredValue = event.target.value;
    	let err = '';
    	if (fieldName === "superiorID") {
	      if (enteredValue !=="" && !Number(enteredValue)) {
	        err = <strong>superior ID must be a number</strong>;
	      }
	      
	    }
	    this.setState({errormessage: err});
	    this.setState({[fieldName]: enteredValue});
	    if (err === ''){
			this.setState({
				[event.target.id]: event.target.value
			});
		}
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		if (this.state.name === null || this.state.title === null || this.state.superiorID === null ) {
	        let err = <strong>Please enter all mandatory fields</strong>;
	        this.setState({errormessage: err});
	        return;
	    }
		this.props.AddEmployee(this.state.name, this.state.title, this.state.superiorID);

	}
	render(){
		return(
			<div className="addEmployeeDetails">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="">Name:</label>
					<input type="text" id="name" onChange={this.handleChange} />
					<label htmlFor="">title:</label>
					<input type="text" id="title" onChange={this.handleChange} />
					<label htmlFor="">SuperiorID:</label>
					<input type="text" id="superiorID" onChange={this.handleChange} />
					<button className="button"> Submit </button>
				</form>
				<div className="error">{this.state.errormessage}</div>
			</div>
		)
	}
}

export default AddEmployee;