import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";




class Detail extends Component {
  state = {
    Customer: {},
    notes: []
  };

  


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
 



  componentDidMount() {
    API.getCustomer(this.props.match.params.id)
      .then(res => this.setState({ Customer: res.data, notes: res.data.notes }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {this.state.Customer.companyName}
              </h1>
              <h2>
                {this.state.Customer.firstName}  {this.state.Customer.lastName}
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="lg-6">
            <article>
              <h1>Company Name</h1>
              <p>
                {this.state.Customer.companyName}
              </p>
              <h1>Company Address</h1>
              <p>
                {this.state.Customer.companyAddress}
              </p>
              <h1>Customer Budget</h1>
              <p>
                {this.state.Customer.companyBudget}
              </p>
              <h1>Expected Completion</h1>
              <p>
                {this.state.Customer.dateExpected}
              </p>
              <h1>Cient Needs</h1>
              <p>
                {this.state.Customer.companyNotes}
              </p>
            </article>
          </Col>
          <Col size="lg-6">
          <h1>Memo List</h1>
          { this.state.Customer.notes ? this.state.Customer.notes.map(note=> <p key={note._id}>{note.note}</p>): null}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Clients</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
