import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/preload.css'
import picture from '../assets/picture.jpg'
import node from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import java from '../assets/java2.svg'
import { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'

const Preload = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <>
      <div className="preload">
        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={picture} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="actionBtn  ">
                <h2>
                  SERGIO NICOLAS MOYANO
                  <br />
                  <span>{t('preload.title')}</span>
                </h2>
                <Link to="/portfolio">
                  <button className="btn1">{t('preload.btn1')}</button>{' '}
                </Link>
              </div>
              <div className="data">
                <img src={react} alt="" />
                <img src={java} alt="" />
                <img src={node} alt="" />
              </div>
              <div className="actionBtn btn2">
                <Link to="/portafolio">
                  {' '}
                  <button>{t('preload.btn2')}</button>{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preload
