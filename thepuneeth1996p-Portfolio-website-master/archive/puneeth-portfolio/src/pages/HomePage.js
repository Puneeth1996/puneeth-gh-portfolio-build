import React from 'react';

import RollingTextHome from '../components/RollingTextHome'
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return(
        <div>
            <RollingTextHome textArr={props.subTitle} />
            <Carousel />
        </div>
    );

}

export default HomePage;