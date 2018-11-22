import React from 'react'
import { Link } from 'gatsby'

import style from './body.module.css'

function Body() {
  return (
    <main className={style.body}>
      <div className={style.content}>
        <h1 className={style.tagline}>Brilliant. In every way.</h1>
        <Link to="/shop" className={style.cta}>
          Shop
        </Link>
      </div>
    </main>
  )
}

export default Body
