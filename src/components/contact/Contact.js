import React from 'react'

import style from './contact.module.css'

function Contact() {
  return (
    <section className={style.contact}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}> Don't be shy, say hi! </h1>
        <p className={style.subtitle}>
          We might deal with trolls, werewolfs and huge dogs, but we don’t bite.
        </p>
      </div>
      <button className={style.primaryButton}>Get in touch</button>
    </section>
  )
}

export default Contact
