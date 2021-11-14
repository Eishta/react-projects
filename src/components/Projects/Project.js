import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({projectDetails}) => {
    let { image, title, git, path } = projectDetails;
    return (
        <div className='project flex-50'>
            <img src={image} alt={title} className='project-image' />
            <div className='project-info'>
                <h3>{title}</h3>
                <div className='project-icons'>
                    <a href={git} target='_blank' rel="noreferrer"><i class="fab fa-github-alt"></i></a>
                    <Link to={path}><i class="fas fa-rocket"></i></Link>
                </div>
            </div>
        </div>

    )
}

export default Project;