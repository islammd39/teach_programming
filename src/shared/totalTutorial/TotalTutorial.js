import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TotalTutorial = ({ tutorial }) => {
    const { image, category } = tutorial;
    const allRating = tutorial?.rating?.rate;
//   console.log(tutorial);
  return (
    <Card className="mb-4">
      <Card.Header as="h5">{category}</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image} />
       <div className=" d-flex justify-content-between align-content-center">
       <Link to={`/tutorial/${tutorial.id}`}><Button className="mt-3 px-5" variant="outline-dark">Details</Button></Link>
        <p className="mt-3">{allRating} <FaStar className="mb-1 text-warning"></FaStar></p>
       </div>
      </Card.Body>
    </Card>
  );
};

export default TotalTutorial;
