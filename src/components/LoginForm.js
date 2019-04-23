import React, { Component } from 'react';
import { Button, Input, CardSection, Card } from './common';
import {connect} from 'react-redux';
import {emailChanged} from '../actions'

class LoginForm extends Component<Props>{
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    render(){
    return (
        <Card>
        <CardSection>
            <Input
            label= "Email: "
                placeholder= "email@gmail.com"
                onChangeText = {this.onEmailChange.bind(this)}
            />
        </CardSection>
        <CardSection>
            <Input
            label= "Password: "
                placeholder= "password"
                secureTextEntry
            />
        </CardSection>
        <CardSection>
            <Button>
               Login
            </Button>
        </CardSection>
        </Card>
        );
    }
}
export default connect(null,{emailChanged})(LoginForm);