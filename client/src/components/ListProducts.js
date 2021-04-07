import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BuyItems() {
  return (
    <section style={{ backgroundColor: "rgba(255, 234, 167,1.0)" }} className="mt-5">
      <div className="d-flex ml-5">
        <h3 className="text-center fs-4 text-dark my-4">Purchase details</h3>
      </div>
      <div className='pb-5'>
        <Table
          striped
          bordered
          hover
          variant="light"
          className="mx-auto container"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='pb-5'>
      <Table
          striped
          bordered
          hover
          variant="light"
          className="mx-auto container"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center pb-5">
              <Link to="/" className="text-light">
                <Button
                  className="mt-5 ml-5 p-4"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "rgba(108, 92, 231,1.0)",
                    border: "1px solid rgba(108, 92, 231,1.0)",
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Order
                </Button>
              </Link>
            </div>
    </section>
  );
}