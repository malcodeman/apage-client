import React from 'react'

import './globalStyle.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import style from './index.module.css'

const IndexPage = () => (
  <>
    <div className={style.fullscreen}>
      <Header />
      <Body />
    </div>
    <Footer />
  </>
)

export default IndexPage
