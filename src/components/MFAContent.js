import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import contentDataMFA from "../utils/contentDataMFA";



class Content extends Component {
  
  render() {
    return (
      <div className="next-steps">
        <h2 className="mt-5 text-center">What can I do next?</h2>
          <Row className="d-flex justify-content-between">
            {contentDataMFA.map((col, i) => (
              <Col>
                <h6 className="mb-3">
                    <FontAwesomeIcon icon="link" />
                    {col.title}
                </h6>
                <p>{col.description}</p>
              </Col>
            ))}
          </Row>
          
      </div>
    );
  }
}

export default Content;
