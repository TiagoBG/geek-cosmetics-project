import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import cosmetics from "../images/cosmetics.jpg";

export default function Home() {
  return (
    <section>
      <Card className="bg-dark text-white">
        <Card.Img
          src={cosmetics}
          alt="Cosmetics image"
          style={{ height: "99vh" }}
        />
        <Card.ImgOverlay>
          <Card.Text>
            <h1 className="text-center fs-1 text-dark my-5">
              Welcome to Geek Cosmetics
            </h1>
            <h5 className="text-center text-dark mt-4 mb-5">
              Let your inner light shine through your self!
            </h5>
            <div className="mt-5 d-flex justify-content-center">
              <Link to="/buy" className="text-light">
                <Button
                  className="mt-5 mr-5 p-4"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#6c5ce7",
                    border: "1px solid #6c5ce7",
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Buy
                  Items
                </Button>
              </Link>
              <Link to="/orders" className="text-light">
                <Button
                  className="mt-5 ml-5 p-4"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#d63031",
                    border: "1px solid #d63031",
                  }}
                >
                  <FontAwesomeIcon icon={faList} className="mr-2" /> See Orders
                </Button>
              </Link>
            </div>
          </Card.Text>
          <Card.Footer
            className="text-center"
            style={{
              marginTop: "32vh",
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
