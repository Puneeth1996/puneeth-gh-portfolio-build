import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { RiMailSendLine  } from 'react-icons/ri';

export default class TutorCard extends Component {
    render() {
        const divStyle = {
            border: "2px solid gold",
            borderRadius: "5vw",
            padding: "10vh 5vw",
            margin: "10vh 5vw",
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9WRftzYx_T1UC3bX9QhvNhTfnHr-6JEV_5g&usqp=CAU')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '75vw 20vh',
            backgroundPosition: 'center'
        };
        return (
            <>
                <div style={divStyle}>
                    <h3  style={{fontSize: "2.5vw", marginTop: '0.5vh',}}  >Complete Python Training</h3>
                    <h3  style={{fontSize: "2.5vw", marginTop: '3vh',}}  >$100(2months duration, 30Hrs). In-person Online class</h3>
                    <div style={{fontSize: "1.75vw", marginTop: '5vh',}} >
                        Learn all the major topics in python starting from basic and all the way up to object oriented technique
                        <br />
                        Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more 
                        <br />
                        Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems.
                    </div>
                    <Button variant="info"     style = {{ margin:"3vh 0 0 0.5vw" }}  >
                        <a href="mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <RiMailSendLine    style = {{ width : 25, height : 25 }}  /> Inquire </a>   
                    </Button>
                </div>
                <div style={divStyle}>
                    <h3  style={{fontSize: "2.5vw", marginTop: '0.5vh',}}  >Complete Python Training</h3>
                    <h3  style={{fontSize: "2.5vw", marginTop: '3vh',}}  >$100(2months duration, 30Hrs). In-person Online class</h3>
                    <div style={{fontSize: "1.75vw", marginTop: '5vh',}} >
                        Learn all the major topics in python starting from basic and all the way up to object oriented technique
                        <br />
                        Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more 
                        <br />
                        Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems.
                    </div>
                    <Button variant="info"     style = {{ margin:"3vh 0 0 0.5vw" }}  >
                        <a href="mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <RiMailSendLine    style = {{ width : 25, height : 25 }}  /> Inquire </a>   
                    </Button>
                </div>
                <div style={divStyle}>
                    <h3  style={{fontSize: "2.5vw", marginTop: '0.5vh',}}  >Complete Python Training</h3>
                    <h3  style={{fontSize: "2.5vw", marginTop: '3vh',}}  >$100(2months duration, 30Hrs). In-person Online class</h3>
                    <div style={{fontSize: "1.75vw", marginTop: '5vh',}} >
                        Learn all the major topics in python starting from basic and all the way up to object oriented technique
                        <br />
                        Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more 
                        <br />
                        Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems.
                    </div>
                    <Button variant="info"     style = {{ margin:"3vh 0 0 0.5vw" }}  >
                        <a href="mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com" target="_blank"  rel="noopener noreferrer"  style={{color: "black", "textDecoration": "none"}}  > <RiMailSendLine    style = {{ width : 25, height : 25 }}  /> Inquire </a>   
                    </Button>
                </div>
            </>
        )
    }
}
