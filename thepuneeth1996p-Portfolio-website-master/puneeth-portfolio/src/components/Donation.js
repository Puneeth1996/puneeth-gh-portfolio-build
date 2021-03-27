import React, { Component } from 'react'

import Table from 'react-bootstrap/Table';



export default class Donations extends Component {
    
    state = {
        loading: true,
        donations: [],
    };

    async componentDidMount() {
        const url = "http://thepuneeth1996p.tech/restAPIa/donation/readAll.php";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ donations: data.Donations, loading: false });
    }
    render() {
        let check = this.state.donations && this.state.donations.length
        return (
            <div style={{ margin: "0 7.5vw", fontSize: "1.25em"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Dated</th>
                        </tr>
                    </thead>
                    <tbody>
                        { check && this.state.donations.map( (donn, idx) => (
                            
                            <tr key={idx}>
                                <td>{donn.userName}</td>
                                <td>{donn.Amount}</td>
                                <td>{donn.dated.substr(0,donn.dated.indexOf(' '))}</td>
                            </tr>

                        ) ) }
                    </tbody>
                </Table>
            </div>
        )
    }
}
