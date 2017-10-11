import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Customers extends Component {
  state = {
    Customers: [],

    firstName: "",
    lastName: "",
    companyName: "",
    companyAddress: "",
    companyBudget: "",
    companyNotes: "",
    dateExpected: ""
  };




  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = () => {
    API.getCustomers()
      .then(res =>
        this.setState({ Customers: res.data, firstName: "", lastName: "", companyName: "", companyBudget: "", companyAddress: "", companyNotes: "", dateExpected: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCustomer = id => {
    API.deleteCustomer(id)
      .then(res => this.loadCustomers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveCustomer({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        companyName: this.state.companyName,
        companyBudget: this.state.companyBudget,
        companyAddress: this.state.companyAddress,
        companyNotes: this.state.companyNotes,
        dateExpected: this.state.dateExpected
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Client</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.companyName}
                onChange={this.handleInputChange}
                name="companyName"
                placeholder="Company Name is (required)"
              />
              <Input
                value={this.state.companyAddress}
                onChange={this.handleInputChange}
                name="companyAddress"
                placeholder="Address  (required)"
              />
               <Input
                value={this.state.companyBudget}
                onChange={this.handleInputChange}
                name="companyBudget"
                placeholder="Budget  (required)"
              />
               <Input
                value={this.state.dateExpected}
                onChange={this.handleInputChange}
                name="dateExpected"
                placeholder="Finsih Date  (required)"
              />
              <TextArea
                value={this.state.companyNotes}
                onChange={this.handleInputChange}
                name="companyNotes"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName)}
                onClick={this.handleFormSubmit}
              >
                Submit Customer
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Your Clients</h1>
            </Jumbotron>
            {this.state.Customers.length ? (
              <List>
                {this.state.Customers.map(Customers => (
                  <ListItem key={Customers._id}>
                    <Link to={"/customer/" + Customers._id}>
                      <strong>
                        {Customers.firstName} {Customers.lastName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCustomer(Customers._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Customers;