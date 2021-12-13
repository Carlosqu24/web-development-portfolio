import React from 'react'

import './Projects.css'

import db from "../../db/Projects.json"

import { ProjectCard } from '../ProjectCard'

export const Projects = () => {

      return (
            <section id="projects" className="section section-projects">
                  <h2 className="section__title">Projects</h2>
                  <div className="projects-grid">
                        {
                              db.map(({ id, name, description, type, imgURL, liveURL, githubRepoURL }) => (
                                    <ProjectCard 
                                          key={id}
                                          name={name}
                                          description={description}
                                          type={type}
                                          imgURL={imgURL}
                                          liveURL={liveURL}
                                          githubRepoURL={githubRepoURL}
                                    />
                              ))
                        }
                  </div>
            </section>
      )
}
