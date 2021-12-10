import React from "react";
import { Form, Col } from "react-bootstrap";
import "../../styles/roulette.scss";

function FormRoulette({ setMode, mode, reset }) {
  const handleChange = (event) => {
    setMode(event);
    reset(true);
  };
  return (
    <Form.Group className="form">
      <Form.Label as="legend">Select Mode</Form.Label>
      <Col>
        <Form.Check
          type="radio"
          id="number"
          label="Number"
          value="Number"
          checked={mode === "Number"}
          onChange={(e) => handleChange(e.target.value)}
          name="numberMode"
        ></Form.Check>
      </Col>
      <Col>
        <Form.Check
          type="radio"
          checked={mode === "color"}
          id="color"
          label="color"
          value="color"
          onChange={(e) => handleChange(e.target.value)}
          name="colorMode"
        ></Form.Check>
      </Col>
    </Form.Group>
  );
}

export default FormRoulette;
