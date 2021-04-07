import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import cosmetics from "../images/cosmetics.jpg";

export default function SeeOrders() {
  return (
    <section>
      <Card className="bg-dark text-white">
        <Card.Img
          src={cosmetics}
          alt="Cosmetics image"
          style={{ minHeight: "650px" }}
        />
        <Card.ImgOverlay>
          <Card.Text               style={{ backgroundColor: "rgba(255, 234, 167,1.0)" }}
>
            <div className="d-flex ml-5" >
              <h3 className="text-center fs-4 text-dark my-4">
                Orders History
              </h3>
            </div>
            <div
              className="pb-5"
            >
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
            <div className="pb-5">
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
                    backgroundColor: "#d63031",
                    border: "1px solid #d63031",
                  }}
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Back Home
                </Button>
              </Link>
            </div>
          </Card.Text>
          <Card.Footer
            className="text-center"
            style={{
              marginTop: "23vh",
              backgroundColor: "hsla(0, 29%, 62%, 0.9)",
              width: "100%",
            }}
          >
            Desarrollado por Santiago Betancur Graciano | Derechos reservados
            &#169; 2021
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </section>
  );
}
