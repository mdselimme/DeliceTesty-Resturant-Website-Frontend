import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/allfood.json")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(food);

  return (
    <div className="menu_maindiv">
      <Container>
        <h1 style={{ color: "#ffffff" }} className="littleabout_title">
          OUR MENUS
        </h1>
        <h4 className="littleabout_para">
          Our Food Always Delicious And Healthy
        </h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <Row>
          <Col md={4}>
            <div className="main"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
