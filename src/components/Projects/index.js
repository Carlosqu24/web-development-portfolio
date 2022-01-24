import React, { useState, useEffect } from 'react'
import './Projects.css'
// COMPONENTS
import { ProjectCard } from '../ProjectCard'
import { ProjectButtonsCategories } from '../ProjectButtonsCategories'
import { useProjects } from '../../hooks/useProjects'


export const Projects = () => {
      const { 
            db, 
            projects,
            category,
            setCategory,
            filter
      } = useProjects()

      return (
            <section id="projects" className="section section-projects">
                  <h2 className="section__title">Projects</h2>
                  <ProjectButtonsCategories
                        db={db}
                        data={projects}
                        filter={filter}
                        category={category}
                        setCategory={setCategory}
                  />
                  <div className="projects-grid">
                        {
                              projects.map(({ _id, name, description, technologies, type, imageURL, links }) => (
                                    <ProjectCard
                                          key={_id}
                                          id={_id}
                                          name={name}
                                          description={description}
                                          technologies={technologies}
                                          type={type}
                                          imgURL={imageURL}
                                          liveURL={links.liveURL}
                                          githubRepoURL={links.githubURL}
                                    />
                              ))
                        }
                  </div>
            </section>
      )
}
