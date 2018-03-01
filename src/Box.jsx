import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

const boxStyle = {
  padding: "5px",
  margin: "2px",
  borderRadius: "10px",
  fontSize: "2em",
  textAlign: "center"
};

const Box = props => (
  <Col xs="12" key={props.value} style={boxStyle}>
    {`${props.value} * ${props.multiplicand} = ${props.value *
      props.multiplicand} `}
  </Col>
);

export default Box;
