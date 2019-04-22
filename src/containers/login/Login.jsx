import React, { Component } from 'react';
import nsApi from '../../util/NSApi';

import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        // Set the intial state for container that handles the login functionality
        this.state = {
            email: "",
            password: ""
        }
    }
    // Checks if form has been filled
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    // Function that handles the changes inputted via the form
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log(event.target.id)
        console.log(this.state)
    }
    // Handles login form submission 
    handleSubmit = event => {
        event.preventDefault(); 
        let email = this.state.email
        let password = this.state.password
        console.log(email, password)
        // The POST Request that we make when login happens
        nsApi.signIn(email, password);
    }
    testAll() {
        nsApi.viewAllReceipients();
    }
    // Finally Render the component
    render() {
    
        return (
            <div className="loginPage">
                <h4>New Story - Survey Data </h4>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h4>Sign In</h4>
                    <input type="text" ref="email" id="email" placeholder="E-mail" onChange={this.handleChange} />
                    <input type="password" ref="password" id="password" placeholder="Password" onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
                <br />
                {
                    /* This will be a new component that appears
                    After Successful Login. Just using to test
                    Login Tokens */
                }
                <button onClick={this.testAll}>viewAllReceipients</button>
                <button>viewAllReceipientSurveys</button>
                <button>viewSubmission</button>
                <button>viewAllStats</button>
                <br />
                <pre>
                    Code
                </pre>
            </div>
        )
    }
}