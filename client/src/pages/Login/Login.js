import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class Login extends Component {
  state = {
    username: "",
    password: "",
    currentUser: ""
  };

  componentWillMount() {
    API.logout()
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          if (res.data.user) {
            this.props.history.push('/customer');
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {

    const containerSize = {
      width:"200px"
    }


    return (
<div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="password (required)"
            />

            <Button color='teal' fluid size='large' disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/register'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    );
  }
}





// const Login = () => (
//   <div className='login-form'>
//     {/*
//       Heads up! The styles below are necessary for the correct render of this example.
//       You can do same with CSS, the main idea is that all the elements up to the `Grid`
//       below must have a height of 100%.
//     */}
//     <style>{`
//       body > div,
//       body > div > div,
//       body > div > div > div.login-form {
//         height: 100%;
//       }
//     `}</style>
//     <Grid
//       textAlign='center'
//       style={{ height: '100%' }}
//       verticalAlign='middle'
//     >
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as='h2' color='teal' textAlign='center'>
//           <Image src='/logo.png' />
//           {' '}Log-in to your account
//         </Header>
//         <Form size='large'>
//           <Segment stacked>
//             <Form.Input
//               fluid
//               icon='user'
//               iconPosition='left'
//                 onChange={this.handleInputChange}
//                 name="username"
//                 placeholder="username (required)"
//             />
//             <Form.Input
//               fluid
//               icon='lock'
//               iconPosition='left'
//                 onChange={this.handleInputChange}
//                 name="password"
//                 type="password"
//                 placeholder="password (required)"
//             />

//             <Button color='teal' fluid size='large' disabled={!(this.state.username && this.state.password)}
//                 onClick={this.handleFormSubmit}>Login</Button>
//           </Segment>
//         </Form>
//         <Message>
//           New to us? <a href='#'>Sign Up</a>
//         </Message>
//       </Grid.Column>
//     </Grid>
//   </div>
// )


export default Login;
