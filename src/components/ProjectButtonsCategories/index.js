import React from 'react'
import { ProjectButtonCategory } from '../ProjectButtonCategory';

import "./ProjectButtonsCategories.css"

export const ProjectButtonsCategories = ({ filter, category, setCategory }) => {

      const handleClick = (e) => {
            filter(e.target.id);
            setCategory(e.target.id);
      };

      return (
            <div className="project-buttons-categories">
                  <button
                        id="all"
                        onClick={(e) => handleClick(e)}
                        className={`project-button-category ${category == 'all' ? 'is-active' : ''}`}
                  >All</button>
                  <button
                        id="landing-page"
                        onClick={(e) => handleClick(e)}
                        className={`project-button-category ${category == 'landing-page' ? 'is-active' : ''}`}
                  >Landing Pages</button>
                  <button
                        id="web-application"
                        onClick={(e) => handleClick(e)}
                        className={`project-button-category ${category == 'web-application' ? 'is-active' : ''}`}
                  >Web Applications</button>
            </div>
      )
}
