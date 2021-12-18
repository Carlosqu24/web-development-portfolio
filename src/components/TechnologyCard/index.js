import React from 'react'

import "./TechnologyCard.css"

export const TechnologyCard = ({ technology }) => {
      return (
            <div className="technology-card">
                  <i
                        style={{ color: technology.color }}
                        class={`projects-card__technology ${technology.class}`}
                  ></i>
                  <p>{technology.name}</p>
            </div>
      )
}
