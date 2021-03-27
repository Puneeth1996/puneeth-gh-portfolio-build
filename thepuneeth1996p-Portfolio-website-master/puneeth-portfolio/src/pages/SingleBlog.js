import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom';
import NotFound from './NotFound'
import axios from 'axios'


export default class SingleBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            blogData: [],
            successMessage: ''
        }
    }
    
    componentDidMount = async () => {
        this.getData()
    }
    
    getData = async () => {

        const form = new FormData()
        form.set('blog_id', this.props.match.params.string)
        const response = await axios.post('http://thepuneeth1996p.tech/restAPIa/blog/readOne.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if(response.data){
            this.setState({
                blogData: response.data.Blog_data_single,
                successMessage: 'True'
            })
        }
        else {
            this.setState({
                blogData: [],
                successMessage: 'False'
            })
        }
    }
    render() {
        console.log(this.state.blogData)
        return (
            <div>

                {
                
                (this.state.successMessage) ? 
                    <>
                        <h3 style={{ margin: "5vh 0 5vh 15vw" }}>{this.state.blogData.card_heading}</h3>
                        <h5 style={{ margin: "0 0 5vh 15vw" }}>{this.state.blogData.card_description}</h5>
                        <div dangerouslySetInnerHTML={{__html: this.state.blogData.blog_info}} style={{margin: "5vh 15vw 5vh 15vw"}} ></div>
                    </>
                    
                :
                    <NotFound />
                }
            </div>
        )
    }
}