import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import Box from "./Box";

const _ = require("lodash");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multiplicand: 1
    };

    this.headerStyle = {
      padding: "50px"
    };

    this.handleMultiplicandChange = this.handleMultiplicandChange.bind(this);
  }

  handleMultiplicandChange(event) {
    const value = parseInt(event.target.value);

    const multiplicand = isNaN(value) ? 0 : value;

    this.setState({
      multiplicand
    });
  }

  render() {
    const boxes = _.range(10).map(value => (
      <Box value={value} multiplicand={this.state.multiplicand} />
    ));

    return (
      <Container>
        <header style={this.headerStyle}>
          <h1 className="display-3">Demo: Multiplication table</h1>
          <FormGroup className="mt-5">
            <Label for="multiplicand">Enter the multiplicand</Label>
            <Input
              type="number"
              name="multiplicand"
              id="multiplicand"
              value={this.state.multiplicand}
              onChange={this.handleMultiplicandChange}
            />
          </FormGroup>
        </header>
        <Row>{boxes}</Row>
      </Container>
    );
  }
}

export default App;
