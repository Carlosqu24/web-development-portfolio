import React from 'react'

import './Main.css'

import { Hero } from '../Hero';
import { About } from '../About';
import { Features } from '../Features';
import { Catering } from '../Catering';
import { Contact } from '../Contact';
import { Projects } from '../Projects';


export const Main = () => {
      return (
            <div>
                  {/* <Hero />
                  <About />
                  <Features />
                  <Catering />
                  <Contact /> */}
                  <Hero />
                  <About />
                  <Projects />
            </div>
      )
}
