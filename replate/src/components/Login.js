import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './Login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            email: '',
            password: '',
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const newLogin = {...this.state}
        console.log('newLogin',newLogin);
    }

    render() {
        return (
            <div className="Login">
            
            <form onSubmit={this.handleSubmit}>
                <h5>Login</h5>
                <input name="email"
                    onChange={this.handleChange}
                    placeholder="email"
                    type="text"
                    value={this.state.email}
                    required />

                <input name="password"
                    onChange={this.handleChange}
                    placeholder="password"
                    type="text"
                    value={this.state.password}
                    required />

                <input type="submit" value="Go" />

                </form>
                </div>
                );
        }
}
