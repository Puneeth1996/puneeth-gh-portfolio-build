import React from 'react';
import Hero from '../components/Hero';
import Donation from '../components/Donation';
import Content from '../components/Content';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { GoMegaphone  } from 'react-icons/go';
import patreonImg from '../assets/patreon/patreon.jpg';
import patreon2Img from '../assets/patreon/patreon2.png';

function PatreonPage(props) {

    return(
        <div>
            <Hero title={props.title} />


            <Content> 
                <p style={{fontSize: '1.5rem' }}>Donations for me means alot of appreciation and reward for the work that I post here.</p>
            </Content>



            <Container  style={{ marginLeft: '15vw' }} >
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={patreonImg}  style={{ height: '25vh' }} rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={patreon2Img}  style={{ height: '25vh', width: '30vw' }} rounded />
                    </Col>
                </Row>
            </Container>



            <Content> 
                <p style={{ fontSize: "3em" }}>Big Shout Outs <GoMegaphone /> </p>
            </Content>

            <br/><br/>

            <Donation />

        </div>
    );

}

export default PatreonPage;