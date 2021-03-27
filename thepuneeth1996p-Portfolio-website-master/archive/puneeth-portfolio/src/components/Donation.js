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
        // console.log(data);
        this.setState({ donations: data.Donations, loading: false });
        // console.log(this.state.loading || !(this.state.blogs.length) );
    }
    render() {
        return (
            <div style={{ margin: "0 17.5vw"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Dated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.donations.map( (donn, idx) => (
                            
                            <tr key={idx}>
                                <td>{donn.userName}</td>
                                <td>{donn.Amount}</td>
                                <td>{donn.dated}</td>
                            </tr>

                        ) ) }
                    </tbody>
                </Table>
            </div>
        )
    }
}
