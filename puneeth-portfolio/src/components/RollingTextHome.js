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
                        <h4 className="display-4 font-weight-light py-5" style={{    fontSize: '5vw', marginLeft: '5vw' }}>
                            {"  "} 
                            <TextLoop>
                                {spanItems}
                            </TextLoop>
                            {"  "}
                        </h4>              
    );

}


export default RollingTextHome;