import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './Signup.scss';
import SignupBusiness from './SignupBusiness';
import SignupFoodBank from './SignupFoodBank';
import SignupNav from './SignupNav';
import SignupVolunteer from './SignupVolunteer';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            businessAddr:'',
            businessName:'',
            email: '',
            name: '',
            password: '',
            usertype: '',
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
            <div className="Signup">

            <h5>Sign Up!</h5>

            <Route exact path="/signup" render={ownProps => (
                <SignupNav {...ownProps} handleChange={this.handleChange}/>
            )}/>

            <form onSubmit={this.handleSubmit}>

                <Route exact path="/signup/volunteer" render={ownProps => (
                    <SignupVolunteer 
                    {...ownProps}
                    email={this.state.email}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    password={this.state.password}
                    />
                )}/>

                <Route exact path="/signup/business" render={ownProps => (
                    <SignupBusiness
                    {...ownProps}
                    businessAddr={this.state.businessAddr}
                    businessName={this.state.businessName}
                    email={this.state.email}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    password={this.state.password}
                    />
                )}/>

                <Route exact path="/signup/foodbank" render={ownProps => (
                    <SignupFoodBank
                    {...ownProps}
                    businessAddr={this.state.businessAddr}
                    businessName={this.state.businessName}
                    email={this.state.email}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    password={this.state.password}
                    />
                )}/>

            </form>

            </div>
        );
    }
}
