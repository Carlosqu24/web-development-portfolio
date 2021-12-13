import React from 'react'

import './Hero.css'

export const Hero = () => {
      return (
            <div className="hero">
                  <div className="hero__card">
                        <h2 className="hero__title"> Welcome to my portfolio!</h2>
                        <p className="hero__subtitle"> Frontend developer.</p>
                        <div className="social-links">
                              <a className="social-link" href="https://github.com/Carlosqu24" target="_blank">
                                    Github
                              </a>
                              <a className="social-link" href="https://mail.google.com" target="_blank">
                                    Gmail
                              </a>
                              <a className="social-link" href="https://www.instagram.com/carlos_qu24/" target="_blank">
                                    Instagram
                              </a>
                        </div>
                  </div>
                  <a className="hero__scroll-down-link" href="#about">
                        <i className="fas fa-chevron-down"></i>
                  </a>
            </div>
      )
}
