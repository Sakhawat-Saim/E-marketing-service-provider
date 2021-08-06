import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSectionImage from "../images/herosectionImage.jpg";

const listItems = [
  "web development",
  "web design",
  "branding",
  "marketing strategy ",
];

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const Homepage = () => {
  return (
    <div>
      <section
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl">
            Welcome to <span>E-MARKETING</span>
            <br />
            services for your convenience
          </h1>
          <ul>
            {listItems.map((listItem) => {
              return (
                <li style={{ fontSize: "1.3rem", listStyle: "number" }}>
                  {listItem}
                </li>
              );
            })}
          </ul>
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            <Button variant="primary" style={{ fontSize: "1.3rem" }}>
              Buy a service
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img className="w-full" src={HeroSectionImage} alt="" />
        </div>
      </section>
      <section className="container my-5">
        <h1 className="text-2xl text-center my-5">
          Our proived services with the best
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {serviceData.map((data) => {
            return (
              <Card key={data.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={HeroSectionImage} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Button variant="primary">Buy now</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Homepage;
