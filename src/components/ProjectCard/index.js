import React from 'react'

import './ProjectCard.css'


export const ProjectCard = ({ imgURL, name, description, type, liveURL, githubRepoURL }) => {
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
