import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import { Link } from 'react-router-dom';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is <Link to="/">Puneeth</Link>.</p>
                
                <p>I'm a full stack engineer with experience in WordPress, PHP, ReactJS, Express JS, Node JS, Oracle SQL, MongoDB, and MySQL.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

                <p>You can check out, all my latest <Link to="/projects">Projects</Link>. Or some interesting <Link to="/projects">Blogs.</Link></p>

                <p>When I'm not learning something new, I play basketball <span role="img" aria-labelledby="smiley">😁</span>.</p>
            </Content>
        </div>
    );

}

export default AboutPage;