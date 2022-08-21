import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeesList from "./components/ListEmployee";

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Employee App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Employee</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<EmployeesList/>} />
            <Route path='/edit/:id' element={<EditEmployee/>} />
            <Route path='/create' element={<CreateEmployee/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
