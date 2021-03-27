import React from 'react';
import Hero from '../components/Hero';
import Donation from '../components/Donation';
import Content from '../components/Content';
import RollingTextHome from '../components/RollingTextHome'
import { Link } from 'react-router-dom';
import { GoMegaphone  } from 'react-icons/go';
import patreonImg from '../assets/patreon/patreon.jpg';

function PatreonPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content> 
                <p style={{fontSize: '1.5rem'}}>Donations for me means alot of appriciation and reward for the work that I post here.</p>
            </Content>
            
            <img alt="" src={patreonImg} style={{height: '25vh', width: '25vw', marginLeft: '30vw'}}/>
            
            <Content> 
                <p style={{ fontSize: "5em" }}>Big Shout Outs <GoMegaphone /> </p>
            </Content>

            <br/><br/>

            <Donation />

        </div>
    );

}

export default PatreonPage;