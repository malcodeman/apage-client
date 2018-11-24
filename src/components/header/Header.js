import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div>left</div>
      <div>
        <strong>Buy-X</strong>
      </div>
      <div>right</div>
    </header>
  )
}

export default Header
