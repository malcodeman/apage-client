import React from 'react'

import './globalStyle.css'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import Usp from '../components/usp/Usp'
import Features from '../components/features/Features'
import School from '../components/school/School'
import Library from '../components/library/Library'
import Newsletter from '../components/newsletter/Newsletter'
import Reviews from '../components/reviews/Reviews'
import Footer from '../components/footer/Footer'
import style from './index.module.css'

const IndexPage = () => (
  <>
    <div className={style.fullscreen}>
      <Header />
      <Body />
    </div>
    <Usp />
    <Features />
    <School />
    <Library />
    <Newsletter />
    <Reviews />
    <Footer />
  </>
)

export default IndexPage
