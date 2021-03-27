import React from 'react';

import Card from '../components/Card';




import project from '../assets/images/projects.jpg'
import myimg from '../assets/images/myimg.jpg'
import contactme from '../assets/images/contactme.jpg'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Projects',
                    subTitle: 'All My Projects',
                    imgSrc: project,
                    link: '/projects',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Puneeth P',
                    subTitle: 'Portfolio Page',
                    imgSrc: myimg,
                    link: '/about',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Contact Me',
                    subTitle: 'You can contact me!',
                    imgSrc: contactme,
                    link: '/contact',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return (
                <>
                    <style type="text/css">
                        {
                            `
                                .g-card-info {
                                    position: absolute;
                                    transform: translate(30%,-100%) !important;
                                    color: cornflowerblue;
                                }
                            `
                        }
                    </style>
                    <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
                </>
                )
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;