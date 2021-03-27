import React from 'react';
import TextLoop from "react-text-loop";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function RollingTextHome(props) {
    const spanItems = props.textArr.map((text, index) =>
        <span key={index}>{text}</span>
    );
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h4 className="display-4 font-weight-light py-5">
                            {"  "} 
                            <TextLoop>
                                {spanItems}
                            </TextLoop>
                            {"  "}
                        </h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>                    
    );

}


export default RollingTextHome;