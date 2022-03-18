import { useState, useEffect } from 'react';
import db from '../db/Projects.json'

export const useProjects = () => {
      const [projects, setProjects] = useState([]);
      const [category, setCategory] = useState("")

      const getProjects = async () => {
            const res = await fetch('http://localhost:4200/projects')
            const data = await res.json()

            setProjects(data)
      }

      console.log(projects)

      const filter = (category) => {

            if (category === 'all') {
                  setProjects(db);
                  return;
            }

            const filteredData = projects.filter(item => item.type === category);

            setProjects(filteredData)
      };

      
      useEffect(() => setCategory("all"), [])
      
      useEffect(() => getProjects(), [])
      
      const getProjectById = (id) => {
            const matchArray = projects.length > 0
                              && projects.filter(project => project._id === id)

            return matchArray[0]
      }

      return { 
            db,
            projects, 
            category,  
            setCategory,
            filter,
            getProjectById
      }
}