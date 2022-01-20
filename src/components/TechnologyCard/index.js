import React from 'react'

import "./TechnologyCard.css"

export const TechnologyCard = ({ technology }) => {
      return (
            <div key={technology.id} className="technology-card">
                  <i
                        style={{ color: technology.color }}
                        className={`projects-card__technology ${technology.class}`}
                  ></i>
                  <p>{technology.name}</p>
            </div>
      )
}
