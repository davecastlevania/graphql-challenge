import React, { Component } from 'react';
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
    }
    // Handles login form submission 
    handleSubmit = event => {
        event.preventDefault(); 
    }
    // Finally Render the component
    render() {
        return (
            <div>
                <h4>REACT LOGIN</h4>
            </div>
        )
    }
}