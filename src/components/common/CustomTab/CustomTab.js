import React from 'react'

export const CustomTab = () => {
      return (
            <div>
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
            </div>
      )
}
