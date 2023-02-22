import proyects from '../json/proyects.json'
import backends from '../json/backend.json'

import React from 'react'
import CardProject from './CardProject'
import '../styles/listProject.css'
import { useTranslation } from 'react-i18next'
import BackendProject from './BackendProject'

const ListProject = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <>
      <div className="project__title">
        <h3>{t('projects.titleF')}</h3>
      </div>
      <div className="container__proyects">
        {proyects.map((project) => (
          <CardProject
            key={project.name}
            name={project.name}
            img={project.image}
            domain={project.domain}
          />
        ))}
      </div>
      <div className="project__title">
        <h3>{t('projects.titleB')}</h3>
      </div>
      <div className="container__proyects">
        {backends.map((project) => (
          <BackendProject
            key={project.name}
            name={project.name}
            img={project.image}
            domain={project.domain}
          />
        ))}
      </div>
    </>
  )
}

export default ListProject
