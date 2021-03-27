import React from 'react';
import RollingTextContact from '../components/RollingTextContact'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Content from '../components/Content';
import Axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookSquare, FaGoogle, FaPhoneAlt  } from 'react-icons/fa';

import { SiGmail  } from 'react-icons/si';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(

            <div>
                <RollingTextContact title={this.props.title} textArr={this.props.subTitle} />
                

                <Content>
                    
                    
                    <Row>
                        <Col  className="d-flex justify-content-between">
                            <a  href="tel:+91 9066 339 217" target="_blank"  rel="noopener noreferrer">
                                <FaPhoneAlt style={{ height: 150, width: 150,   color: "gray", "textDecoration": "none"  }}  /> 
                            </a>
                            <a href="https://www.linkedin.com/in/puneeth-p-861095146/" target="_blank"  rel="noopener noreferrer"> 
                                <FaLinkedinIn style={{ height: 150, width: 150,   color: "#0095ff", "textDecoration": "none"  }}  /> 
                            </a>
                            <a href="mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com" target="_blank"  rel="noopener noreferrer"> 
                                <SiGmail style={{ height: 150, width: 150,   color: "red", "textDecoration": "none"    }}  /> 
                            </a>
                        </Col>
                    </Row>

                </Content>
            </div>
        );
    }

}

export default ContactPage;