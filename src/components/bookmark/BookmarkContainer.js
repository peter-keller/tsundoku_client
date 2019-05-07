import React from "react";
import { Container, Row, Col } from "reactstrap";
import Bookmark from "./Bookmark";
import * as Api from "../../lib/Api";

class BookmarkContainer extends React.Component {
  state = {};

  componentWillMount() {
    const { cookies } = this.props;
    let jwt = cookies.get("rails-react-token-auth-jwt");
    this.fetchBookmarks(jwt);
  }

  fetchBookmarks = jwt => {
    Api.getBookmarks(jwt).then(response => {
      this.setState({
        bookmarks: response.data
      });
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col
            lg="3"
            sm="3"
            style={{ border: "1px solid black", height: "800px" }}
          />
          <Col lg="7" sm="7">
            <div style={{ border: "1px solid red", height: "800px" }}>
              {this.state.bookmarks
                ? this.state.bookmarks.map((item, index) => (
                    <Bookmark data={item} key={index} />
                  ))
                : null}
            </div>
          </Col>
          <Col lg="2" sm="2" />
        </Row>
      </Container>
    );
  }
}

export default BookmarkContainer;
