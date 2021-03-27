import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard'

function ProjectsPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <ProjectCard />
        </div>
    );

}

export default ProjectsPage;