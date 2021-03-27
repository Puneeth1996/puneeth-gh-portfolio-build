import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h3 className="display-1 font-weight-bolder"  style={{    fontSize: '8vw', marginLeft: '5vw' }} >{props.title}</h3> }
                        { props.subTitle && <h4 className="display-4 font-weight-light"  style={{    fontSize: '5vw', marginLeft: '5vw' }} >{props.subTitle}</h4> }
                        { props.text && <h4 className="lead font-weight-light"  style={{    fontSize: '3vw', marginLeft: '5vw' }} >{props.text}</h4> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;