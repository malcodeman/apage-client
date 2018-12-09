import React from 'react'
import { Link } from 'gatsby'

import style from './footer.module.css'
import facebookIcon from '../../images/social_icons/facebook.svg'
import messengerIcon from '../../images/social_icons/messenger.svg'
import instagramIcon from '../../images/social_icons/instagram.svg'
import twitterIcon from '../../images/social_icons/twitter.svg'
import mediumIcon from '../../images/social_icons/medium.svg'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.summary}>
        <div className={style.brand}>
          <span className={style.brandName}>Bedtime Stories</span>
          <span>Exciting tales for young & old</span>
        </div>
        <p>
          The storytelling app for families - read diverse & empowering stories
          or tell them in your own words.
        </p>
      </div>
      <div className={style.menus}>
        <div className={style.menu}>
          <h2 className={style.menuHeader}>Product</h2>
          <Link to="/" className={style.menuItem}>
            Home
          </Link>
          <Link to="/" className={style.menuItem}>
            Storytelling School
          </Link>
          <Link to="/" className={style.menuItem}>
            Library
          </Link>
        </div>
        <div className={style.menu}>
          <h2 className={style.menuHeader}>Company</h2>
          <Link to="/" className={style.menuItem}>
            Blog
          </Link>
          <Link to="/" className={style.menuItem}>
            About Us
          </Link>
          <Link to="/" className={style.menuItem}>
            Press Kit
          </Link>
          <Link to="/" className={style.menuItem}>
            Imprint
          </Link>
          <Link to="/" className={style.menuItem}>
            Privacy
          </Link>
          <Link to="/" className={style.menuItem}>
            Terms
          </Link>
        </div>
        <div className={style.menu}>
          <h2 className={style.menuHeader}>Connect with us</h2>
          <Link to="/" className={style.menuItem}>
            <img src={facebookIcon} alt="" className={style.socialIcon} />
            Facebook
          </Link>
          <Link to="/" className={style.menuItem}>
            <img src={messengerIcon} alt="" className={style.socialIcon} />
            Messenger
          </Link>
          <Link to="/" className={style.menuItem}>
            <img src={instagramIcon} alt="" className={style.socialIcon} />
            Instagram
          </Link>
          <Link to="/" className={style.menuItem}>
            <img src={twitterIcon} alt="" className={style.socialIcon} />
            Twitter
          </Link>
          <Link to="/" className={style.menuItem}>
            <img src={mediumIcon} alt="" className={style.socialIcon} />
            Medium
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
