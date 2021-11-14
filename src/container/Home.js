import React from 'react';
import { paths } from '../data/routesData';
import Project from '../components/Projects/Project';
import '../styles/home.css';
import '../styles/common.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='title'>
                <h2>
                   basic projects
                </h2>
                <div className='underline'></div>
            </div>
            <div className='section-center'>
                {paths.map((project, i) => <Project projectDetails={project} key={i} />)}

            </div>

        </div>
    )
}

export default Home;