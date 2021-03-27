import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookSquare, FaGoogle, FaGithub, FaYoutube  } from 'react-icons/fa';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <a href="https://www.instagram.com/puneeth1996p/" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}} > <FaInstagram style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="https://www.linkedin.com/in/puneeth-p-861095146/" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaLinkedinIn  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="https://twitter.com/Puneeth1997" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaTwitter  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="https://www.facebook.com/puneeth1996p" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaFacebookSquare  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaGoogle  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="https://github.com/Puneeth1996" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaGithub  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                        <a href="https://www.youtube.com/channel/UCjccj32rGwQfPuh2ANC0TUQ" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <FaYoutube  style = {{ width : 25, height : 25, marginRight : 15 }}/> </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;