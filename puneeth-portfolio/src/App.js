import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogRoute from './pages/BlogRoute';
import PatreonPage from './pages/PatreonPage';
import ProjectsPage from './pages/ProjectsPage';
import TrainingPage from './pages/TrainingPage';
import NotFound from './pages/NotFound'

import { DiReact, DiJsBadge } from "react-icons/di";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Puneeth',
      home: {
        subTitle: ['Be Thankfull To Everything', 'Always Uncomplaint', 'Stay On That Grind', 'Strive For Improvement', 'Be Kind & Sympathetic', 'Be Relentless'],
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'All My Projects',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      blogs: {
        title: 'Blogs Page',
        subTitle: ['Learning', 'Correcting', 'Improving', 'Helping', 'Enjoying'],
      },
      patreon: {
        title: 'Patreon Page',
      },
      trainings: {
        title: 'iTeach',
        subTitle: 'Looook out, you can unlock the superhuman potential!',
      },
      contact: {
        title: 'Contact Page',
        subTitle: ["Let\'s Talk", "Let\'s Collabrate ", "Let\'s Discuss", "Let\'s Start A Conversation", "Let\'s Get On A Chat", "Let\'s Build Together", "Ask Questions"],
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <a href="/"   style={{"color": "#00000080", "textDecoration": "none"}} ><DiReact color="#61dafb" className="react-icon" />{this.state.title}</a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/trainings">My Trainings</Link>
                <Link className="nav-link" to="/blogs">Blogs</Link>
                <Link className="nav-link" to="/patreon">Patreon</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact render={() => <HomePage subTitle={this.state.home.subTitle} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
            <Route path="/trainings" render={() => <TrainingPage title={this.state.trainings.title} subTitle={this.state.trainings.subTitle} />} />
            <Route path="/blogs" render={() => <BlogRoute title={this.state.blogs.title} subTitle={this.state.blogs.subTitle} />} />
            <Route path="/patreon" render={() => <PatreonPage title={this.state.patreon.title} subTitle={this.state.patreon.subTitle} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />} />
            <Route render={() =>  <NotFound />} />
          </Switch>
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
