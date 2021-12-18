import React, { useState, useEffect } from 'react'

import './Projects.css'

// DB
import db from "../../db/Projects.json"

// COMPONENTS
import { ProjectCard } from '../ProjectCard'
import { ProjectButtonsCategories } from '../ProjectButtonsCategories'

export const Projects = () => {
      const [data, setData] = useState(db)
      const [category, setCategory] = useState("")

      const filter = (category) => {

            if (category === 'all') {
                  setData(db);
                  return;
            }

            const filteredData = db.filter(item => item.type === category);

            setData(filteredData)
      };

      useEffect(() => setCategory("all"), [])

      console.log(data)

      return (
            <section id="projects" className="section section-projects">
                  <h2 className="section__title">Projects</h2>
                  <ProjectButtonsCategories
                        db={db}
                        data={data}
                        filter={filter}
                        category={category}
                        setCategory={setCategory}
                  />
                  <div className="projects-grid">
                        {
                              data.map(({ id, name, description, technologies, type, imgURL, liveURL, githubRepoURL }) => (
                                    <ProjectCard
                                          key={id}
                                          name={name}
                                          description={description}
                                          technologies={technologies}
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
