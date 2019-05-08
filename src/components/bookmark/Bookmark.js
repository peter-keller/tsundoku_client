import React from "react";
import { Col, Row, Container, Card, CardHeader, CardText } from "reactstrap";

import "./bookmark.css";

class Bookmark extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Row>
          <Col lg="12" sm="12">
            <Row className="clearfix">
              <Col lg="1" sm="1" className="float-left">
                <input type="checkbox" />
              </Col>
              <Col lg="6" sm="6">
                <Card className="cardCont">
                  <CardHeader>{this.props.data.title}</CardHeader>
                  <CardText className="textBox">
                    <a href={this.props.data.url}>{this.props.data.url}</a>
                  </CardText>
                </Card>
              </Col>
              <Col lg="4" sm="4" />
              <Col lg="1" sn="1" className="float-right">
                button
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmark;
