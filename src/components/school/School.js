import React from 'react'
import { Link } from 'gatsby'

import style from './school.module.css'
import schoolIllustration from '../../images/school_illustration.svg'

function School() {
  return (
    <div className={style.school}>
      <div>
        <h3 className={style.title}>Become a better storyteller</h3>
        <p className={style.subtitle}>
          Join world's first Storytelling School for Families! Learn everything
          about stories and how to tell them. For free in our app!
        </p>
        <div className={style.buttonWrapper}>
          <Link to="/school" className={style.primaryButton}>
            <span role="img" aria-label="books" className={style.emoji}>
              🎓
            </span>
            Explore our courses
          </Link>
        </div>
      </div>
      <div className={style.illustrationWrapper}>
        <img src={schoolIllustration} alt="" className={style.illustration} />
      </div>
    </div>
  )
}

export default School
