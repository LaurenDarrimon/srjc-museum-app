import React from "react"
import { Col, Card } from "react-bootstrap";

export const PotteryInfoCard = (props) => {

  return (
    <Col xs={6} sm={4} md={3} lg={2} className="featherCard" data-testid={`box-${props.number}`}>
      <Card >
        <Card.Img
          variant="top"
          src={require(`../../assets/images/southwest/pottery/${props.image}`)}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
      <h5></h5>
      <p></p>
    </Col>
  );
};