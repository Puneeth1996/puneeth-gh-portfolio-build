import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';


export default class TutorCard extends Component {
    render() {
        return (
            <div>
                <Card className="bg-dark text-white"  style={{margin: "5vw"}}>
                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9WRftzYx_T1UC3bX9QhvNhTfnHr-6JEV_5g&usqp=CAU" alt="Card image" />
                    <Card.ImgOverlay style={{color: "black"}}>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Footer>Last updated 3 mins ago</Card.Footer>
                    </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
}
