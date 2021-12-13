import React from 'react'

import './Main.css'

import { Hero } from '../Hero';
import { About } from '../About';
import { Projects } from '../Projects';


export const Main = () => {
      return (
            <main className="main">
                  <Hero />
                  <div className="container">
                        <About />
                        <Projects />
                  </div>
            </main>
      )
}
