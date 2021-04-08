import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function BuyItems() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <section style={{ backgroundColor: "rgba(255, 234, 167,1.0)" }}>
      <div className="d-flex mt-3">
        <h3 className="text-dark ml-5 pt-3">Order N° 463467</h3>
        <h3 className="text-dark ml-5 pt-3" style={{marginLeft:'10vw'}}>{today.toLocaleDateString()}</h3>
      </div>
      <div className="mt-5 pb-4 d-flex justify-content-center container-fluid text-dark">
        <Form className="d-flex">
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="mb-4 mr-5"
          >
            <Form.Label>Buyer's name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Choose the product</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="mb-4 mx-5"
          >
            <Form.Label>Product Amount</Form.Label>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="mb-4 mx-5"
          >
            <Form.Label>Subtotal</Form.Label>
            <Form.Control type="text" placeholder="$0" />
          </Form.Group>
        <FontAwesomeIcon
            icon={faPlusCircle}
            style={{
              fontSize: "3rem",
              // backgroundColor: "#6c5ce7",
              borderRadius: "50px",
              marginTop:'4vh'
            }}
          />
        </Form>
      </div>
    </section>
  );
}
