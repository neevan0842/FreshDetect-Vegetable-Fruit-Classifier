import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../api";

const About = () => {
  const [classNames, setClassNames] = useState(null);
  const getClassNames = async () => {
    try {
      const response = await api.get("/class_names");
      if (response.status === 200) {
        setClassNames(response.data.class_names);
      } else {
        console.error("Failed to fetch class names");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClassNames();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="my-5">
            <Card.Header as="h3">
              About Vegetable and Fruit Detector
            </Card.Header>
            <Card.Body>
              <Card.Text>
                This project is a comprehensive Vegetable and Fruit Detector
                application. It supports image uploads in the following formats:
              </Card.Text>
              <ul>
                <li>PNG</li>
                <li>JPG</li>
                <li>JPEG</li>
                <li>GIF</li>
              </ul>
              <Card.Text>
                The model is trained to recognize the following classes:
              </Card.Text>
              <ul>
                {classNames &&
                  classNames.map((item, index) => (
                    <li key={index}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                  ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
