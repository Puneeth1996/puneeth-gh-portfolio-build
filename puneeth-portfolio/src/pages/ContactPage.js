import React from 'react';
import RollingTextContact from '../components/RollingTextContact'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Content from '../components/Content';
import Axios from 'axios';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <RollingTextContact title={this.props.title} textArr={this.props.subTitle} />
                

                <Content>

                </Content>
            </div>
        );
    }

}

export default ContactPage;