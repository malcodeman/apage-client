import React from 'react'
import { Link } from 'gatsby'

import style from './body.module.css'
import illustration from '../../images/hero_illustration.jpg'
import award from '../../images/award.svg'

function Body() {
  return (
    <main className={style.body}>
      <div className={style.content}>
        <h1 className={style.title}>The bedtime story app for families</h1>
        <p className={style.subtitle}>
          Awaken the inner storyteller with diverse and empowering stories for
          young & old. Storytelling has never been easier.
        </p>
        <div className={style.buttonsWrapper}>
          <Link to="/" className={style.primaryButton}>
            How does it work ?
          </Link>
          <Link to="/library" className={style.secondaryButton}>
            <span role="img" aria-label="books" className={style.emoji}>
              📚
            </span>
            Explore library
          </Link>
        </div>
        <div className={style.awardWrapper}>
          <img src={award} className={style.awardIcon} alt="" />
          <span className={style.awardText}>Parents' Choice Approved App</span>
        </div>
      </div>
      <img src={illustration} alt="" className={style.heroIllustration} />
    </main>
  )
}

export default Body
