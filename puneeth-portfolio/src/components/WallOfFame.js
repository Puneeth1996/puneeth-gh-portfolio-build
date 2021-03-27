import React, { Component } from 'react'

import { Badge, Button  } from 'react-bootstrap'


export default class WallOfFame extends Component {
        
    state = {
        loading: true,
        student: [],
    };

    async componentDidMount() {
        const url = "http://thepuneeth1996p.tech/restAPIa/student/readAll.php";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ student: data.Students, loading: false });
    }


    render() {
        let check = this.state.student && this.state.student.length
        const divStyle = {
            marginBotton: '20vh',
        };
        return (
            <>
                <div   style={{  marginTop: '20vh' }} >
                    <h4 className="display-1 font-weight-bolder"  style={{    fontSize: '5vw', marginLeft: '12vw' }} >Wall Of Fame</h4>
                    <h4 className="display-1 font-weight-bolder"  style={{    fontSize: '5vw', marginLeft: '20vw' }} >Respectfull Honorees</h4>
                    <div     style={divStyle} >
                        { check && this.state.student.map( (donn, idx) => (

                                <Button variant="light" key={idx} style={{ backgroundColor: '#cecece', margin:"2vh 1vw" }}>
                                    {donn.userName} <Badge variant="light">{donn.studentid}</Badge>
                                </Button>

                        ) ) }
                    </div>
                </div>
            </>
        )
    }
}
