import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Redirect } from 'react-router-dom';

import styles from './login.module.css';

class Login extends Component {

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/devices' />
    }
  }

  render() {

    return (
      <div className={styles.loginContainer}>
        {this.renderRedirect()}
        <Form className={styles.form} onSubmit={this.setRedirect}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="string" placeholder="Username" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Button className={styles.button} type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
