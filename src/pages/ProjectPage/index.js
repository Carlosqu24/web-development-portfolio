import React from 'react'
import { useParams } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'

export const ProjectPage = () => {
      const { getProjectById } = useProjects()

      const { projectId } = useParams()

      const {
            _id: id,
            name,
            description,
            imageURL
      } = getProjectById( projectId )
      

      return (
            <>
                  <h2>Id: {id}</h2>
                  <h4>Name: {name}</h4>
                  <p>Description: { description }</p>
                  <img src={ imageURL } alt="" />
            </>
      )
}
