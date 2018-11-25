import React from 'react'

import { Link } from 'gatsby'
import style from './header.module.css'
import menu from '../../images/menu.svg'

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.brand}>
          <span className={style.brandName}>Bedtime Stories</span>
          <span>Exciting tales for young & old</span>
        </div>
        <button className={style.menu}>
          <img src={menu} alt="" className={style.menuIcon} />
        </button>
        <div className={style.mainNavigation}>
          <Link to="/" className={style.navItem} activeClassName={style.active}>
            Home
          </Link>
          <Link
            to="/school"
            className={style.navItem}
            activeClassName={style.active}
          >
            Storytelling School
          </Link>
          <Link
            to="/library"
            className={style.navItem}
            activeClassName={style.active}
          >
            Library
          </Link>
          <Link
            to="/blog"
            className={style.navItem}
            activeClassName={style.active}
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
