import React from 'react'

import './globalStyle.css'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import Reviews from '../components/reviews/Reviews'

import Footer from '../components/footer/Footer'
import style from './index.module.css'

const IndexPage = () => (
  <>
    <div className={style.fullscreen}>
      <Header />
      <Body />
    </div>
    <Reviews />
    <Footer />
  </>
)

export default IndexPage
