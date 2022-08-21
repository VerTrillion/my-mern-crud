import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
  <tr>
    <td>{props.employee.employeeId}</td>
    <td>{props.employee.firstName}</td>
    <td>{props.employee.lastName}</td>
    <td>
      <Link to={"/edit/"+props.employee._id}>Edit</Link>
    </td>
  </tr>
)

export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {employees: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/v1/employees/')
      .then(response => {
        this.setState({ employees: response.data.rows });
      })
      .catch(function (error){
        console.log(error);
      })
  }

  employeeList() {
    console.log("employees:", this.state.employees)
    return this.state.employees.map((item, i) => {
      return <Employee employee={item} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Employee List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          { this.employeeList() }
          </tbody>
        </table>
      </div>
    )
  }
}