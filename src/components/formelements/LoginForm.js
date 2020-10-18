import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import firebase from 'firebase'
import Button from '../common/Button'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import Spinner from '../common/Spinner'

import Input from '../common/Input'

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        Loading: false
    }
    ButtonPressHandler() {
        const { email, password, Loading } = this.state;
        this.setState({ error: '', Loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password).
            then(() => this.onLoginSuccess.bind(this)).
            catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess.bind(this))
                    .catch(() => this.onLoginFailed.bind(this))
            });
    }


    onLoginFailed() {
        this.setState({ error: 'Authentication Failed' })
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            Loading: false
        })
    }
    renderButton() {
        if (this.state.Loading === true) {
            return <Spinner />
        }
        return (
            <Button onPress={this.ButtonPressHandler.bind(this)}>
                Login
            </Button>
        )
    }
    render() {
        return (

            <Card>
                <CardSection >
                    <Input
                        label="Email"
                        placeholder="alihaider@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <Text style={styles.error}>{this.state.error}</Text>
                <CardSection >
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}

                </CardSection>
            </Card>

        )
    }
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
})