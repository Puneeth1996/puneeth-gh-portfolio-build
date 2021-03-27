import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogsPage from './BlogsPage.js'
import SingleBlog from './SingleBlog.js'


export default class BlogRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/blogs' render={(props) => <BlogsPage  title={this.props.title} subTitle={this.props.subTitle} {...props} />} />
                <Route path='/blogs/:string' component={SingleBlog}/>
            </Switch>
        )
    }
}
