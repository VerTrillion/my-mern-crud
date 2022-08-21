import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props);

    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangePosition = this.onChangePosition.bind(this)
    this.onChangeSalary = this.onChangeSalary.bind(this)
    this.onChangeDepartment = this.onChangeDepartment.bind(this)

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employeeId: '',
      firstName: '',
      lastName: '',
      position: '',
      salary: 0,
      department: ''
    }
  }

  onChangeEmployeeId(e) {
    this.setState({
      employeeId: e.target.value
    })
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangePosition(e) {
    this.setState({
      position: e.target.value
    })
  }

  onChangeSalary(e) {
    this.setState({
      salary: e.target.value
    })
  }

  onChangeDepartment(e) {
    this.setState({
      department: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      employeeId: this.state.employeeId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      salary: this.state.salary,
      department: this.state.department
    }

    console.log(`Form submitted:`);
    console.log(employee)

    axios.post('http://localhost:4000/api/v1/employees/', employee)
      .then(res => console.log(res.data));

    this.state = {
      employeeId: '',
      firstName: '',
      lastName: '',
      position: '',
      salary: 0,
      department: ''
    }
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Create Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Employee Id: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.employeeId}
              onChange={this.onChangeEmployeeId}
            />
          </div>

          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="form-group">
            <label>Position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.position}
              onChange={this.onChangePosition}
            />
          </div>

          <div className="form-group">
            <label>Salary: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.salary}
              onChange={this.onChangeSalary}
            />
          </div>

          <div className="form-group">
            <label>Department: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.department}
              onChange={this.onChangeDepartment}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Employee" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}