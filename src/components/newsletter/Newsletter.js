import React from 'react'

import style from './newsletter.module.css'

function Newsletter() {
  return (
    <div className={style.newsletter}>
      <div>
        <h3 className={style.title}>
          <span role="img" aria-label="mailbox" className={style.emoji}>
            📬
          </span>
          Newsletter
        </h3>
        <p className={style.subtitle}>
          Receive and feature updates must-read articles
        </p>
      </div>
      <div className={style.emailWrapper}>
        <input
          type="email"
          placeholder="Enter your email"
          className={style.emailInput}
        />
        <button className={style.subscribeButton}>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
