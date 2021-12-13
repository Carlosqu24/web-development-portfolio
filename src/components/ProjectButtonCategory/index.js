import React from 'react'

import "./ProjectButtonCategory.css"

export const ProjectButtonCategory = ({ category, filter }) => {
      return (
            <button
                  id={ category }
                  onClick={(e) => filter(e.target.id)}
                  className={`project-button-category ${  category ? 'is-active' : ''}`}
            >{ category }</button>
      )
}
