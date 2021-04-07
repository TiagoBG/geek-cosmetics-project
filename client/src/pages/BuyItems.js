import React from "react";
import AddProduct from "../components/AddProduct";
import ListProducts from "../components/ListProducts";
import { Card } from "react-bootstrap";
import cosmetics from "../images/cosmetics.jpg";

export default function BuyItems() {
  return (
    <section>
      <Card className="bg-dark text-white">
        <Card.Img
          src={cosmetics}
          alt="Cosmetics image"
          style={{ height: "1150px" }}
        />
        <Card.ImgOverlay>
          <Card.Text>
            <AddProduct />
            <ListProducts />            
          </Card.Text>
          <Card.Footer
            className="text-center"
            style={{
              marginTop: "17vh",
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
