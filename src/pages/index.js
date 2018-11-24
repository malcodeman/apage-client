import React from 'react'

import './globalStyle.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Reviews from '../components/reviews/Reviews'

import Footer from '../components/Footer'
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
