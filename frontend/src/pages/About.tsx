import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const classNames: string[] = [
    "apple",
    "banana",
    "beetroot",
    "bell pepper",
    "cabbage",
    "capsicum",
    "carrot",
    "cauliflower",
    "chilli pepper",
    "corn",
    "cucumber",
    "eggplant",
    "garlic",
    "ginger",
    "grapes",
    "jalepeno",
    "kiwi",
    "lemon",
    "lettuce",
    "mango",
    "onion",
    "orange",
    "paprika",
    "pear",
    "peas",
    "pineapple",
    "pomegranate",
    "potato",
    "raddish",
    "soy beans",
    "spinach",
    "sweetcorn",
    "sweetpotato",
    "tomato",
    "turnip",
    "watermelon",
  ];

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
              </ul>
              <Card.Text>
                The model is trained to recognize the following classes:
              </Card.Text>
              <Row>
                {classNames.map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
