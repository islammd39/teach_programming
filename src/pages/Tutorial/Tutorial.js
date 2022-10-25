import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Tutorial = () => {
    const languages = useLoaderData();
    const {title, image, description} = languages;
    // console.log(languages);
    return (
        <Card className="mb-4">
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image} className="" />
      <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default Tutorial;