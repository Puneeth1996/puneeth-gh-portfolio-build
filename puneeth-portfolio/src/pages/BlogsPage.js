import React, { Component } from 'react'
import RollingText from '../components/RollingText'
import { Link } from 'react-router-dom'

import { CardColumns, Card, Pagination , Form, FormControl, Button  } from 'react-bootstrap'


export default class BlogsPage extends Component {
    state = {
        loading: true,
        blogs: [],
        pgNumber: 1,
        search: "",
    };



    pageChanged_blog = (e) => {
        const pgNumber = parseInt(e.target.text)
        this.setState({pgNumber});
    }

    async componentDidMount() {
        const url = "http://thepuneeth1996p.tech/restAPIa/blog/readAll.php";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ blogs: data.Blogs_data, loading: false });
    }


    updateSearch = (evt) => {
        this.setState({ search: evt.target.value.substr(0,25) })
    }

    render() {
        // adding some logic for filtering search text
        let filteredItmes = this.state.blogs.filter( (blog) => {
            return blog.card_heading.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        } )
        
        let numItemsPerPage = 9; 
        let active = this.state.pgNumber;
        let blogs = [];
        let totalPages = Math.ceil(filteredItmes.length/numItemsPerPage);
        for (let number = 1; number <= totalPages; number++) {
            blogs.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        const blog_resultItems = filteredItmes.slice(numItemsPerPage*(active-1),(numItemsPerPage*active));
        // console.log(this.props)
        return (
            <div>
                <RollingText title={this.props.title} textArr={this.props.subTitle} />
                

                <Form inline style={{ margin: "0 0 10vh 25vw"}}>
                    <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch} className="mr-sm-2"  style={{ width: "50%"}} />
                </Form>


                { 
                    this.state.loading || !(this.state.blogs.length) ? 
                    ( <div>loading...</div> ) :
                    ( 
                        
                        <>
                        <CardColumns style={{marginLeft: '10vw', marginRight: '5vw'}}>
                            {blog_resultItems.map( (blog, idx) => (
                                <>
                                    <div key={idx} >
                                        <Card>
                                            <Card.Img variant="top" src={blog.card_image} />
                                            <Card.Body>
                                                <Card.Title>{blog.card_heading}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{blog.blog_type}</Card.Subtitle>
                                                <Card.Text>
                                                    {blog.card_description}
                                                </Card.Text>
                                                <Link to={`/blogs/${blog.blog_id}`}>Read it Completly</Link>
                                                <br/>
                                                <Link to={`/patreon`}>Patreon</Link>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">{blog.date_added}</small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </>
                            ) )}
                        </CardColumns>
                        <Pagination style={{marginLeft: '10vw', marginRight: '5vw'}} size="lg" onClick={this.pageChanged_blog}>{blogs}</Pagination>
                        </>
                    )
                }
            </div>
        )
    }
}
