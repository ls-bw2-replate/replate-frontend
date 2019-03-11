import React, { Component } from 'react';

import './SignupVolunteer.scss';

export default class SignupVolunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            cellphone: '',
            email: '',
            name: '',
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
        const newVolunteer = {...this.state}
        console.log('newVolunteer',newVolunteer);
    }

    render() {
        return (
            <div className="SignupVolunteer">
            
            <form onSubmit={this.handleSubmit}>
                <h5>Thank you for volunteering!</h5>
                <p>First we need some basic information..</p>
                <input name="name"
                    onChange={this.handleChange}
                    placeholder="name"
                    type="text"
                    value={this.state.name}
                    required />

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

                <input name="cellphone"
                    onChange={this.handleChange}
                    placeholder="cellphone"
                    type="text"
                    value={this.state.cellphone}
                    required />

                <input type="submit" value="Go" />
                <input type="reset"/>

                </form>
                </div>
                );
        }
}
