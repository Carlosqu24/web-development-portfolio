import React from 'react'
import { Link } from 'react-router-dom'

import './ProjectCard.css'


export const ProjectCard = ({ 
      id, 
      imgURL, 
      name, 
      description, 
      technologies,  
      type, 
      liveURL, 
      githubRepoURL 
}) => {
      return (
            <div className="projects-card">
                  <img
                        className="projects-card__img"
                        src={imgURL}
                        alt={name}
                  />
                  <div className="projects-card__info">
                        <h3 className="projects-card__title">{name}</h3>
                        <p className="projects-card__text">{description}</p>

                        <Link
                              className="projects-card__link projects-card__link--live"
                              to={`/projects/${id}`}
                        >
                              <span>See Details</span>
                              <i className="fas fa-info-circle"></i>
                        </Link>
                        <a
                              className="projects-card__link projects-card__link--live"
                              href={liveURL}
                              target="_blank"
                        >
                              <span>See Project</span>
                              <i className="fas fa-eye"></i>
                        </a>
                        <a
                              className="projects-card__link projects-card__link--code"
                              href={githubRepoURL}
                              target="_blank"
                        >
                              <span>See code</span>
                              <i className="fab fa-github"></i>
                        </a>
                  </div>
            </div>
      )
}
