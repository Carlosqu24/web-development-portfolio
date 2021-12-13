import React from 'react'

import './About.css'

export const About = () => {
      return (
            <section id="about" className="section section-about">
                  <h2 className="section__title">About</h2>
                  <div className="card">
                        <div className="card__info">
                              <h2 className="card__title">I'm Carlos Quesada.</h2>
                              <p className="card__text"> I am web developer with 1+ years of experience developing personal
                                    projects. My skills are: HTML5, CSS3, JS, ReactJs and a little bit of NodeJs,
                                    MongoDB, MySQL, Git, etc.
                              </p>
                              <p className="card__text">Responsibility, honestly and commitment are the most valuable
                                    principles both in my private and professional life.
                              </p>
                              <p className="card__text">I am determined, self-taught and proactive in solving problems
                                    without previous experience.</p>

                              <p className="card__text">I am looking for new opportunities and eager to add value to your
                                    company, honing my skills and growing as a professional developer.</p>

                              <button id="btn-curriculum" className="button button--cv">Download CV</button>
                        </div>
                        <div className="card__container-img"> <img className="card__img" src="./assets/images/card-about.jpg"
                              alt="" /></div>
                  </div>
            </section>
      )
}
