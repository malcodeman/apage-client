import React from 'react'
import { Link } from 'gatsby'

import style from './library.module.css'
import card1Image from '../../images/cards/card1.jpg'
import card2Image from '../../images/cards/card2.jpg'
import card3Image from '../../images/cards/card3.jpg'
import bell from '../../images/bell.svg'

function Library() {
  const counters = [
    {
      number: '29x',
      label: 'Storyworlds',
    },
    {
      number: '150x',
      label: 'Stories',
    },
    {
      number: '30.6h',
      label: 'of Storytime',
    },
    {
      number: '50M+',
      label: 'possible stories',
    },
  ]
  const cards = [
    {
      image: card1Image,
      title: 'Tate’s Time Traveling Top',
      description:
        'Tate, a young boy on the autism spectrum, loves watching tops spin. One day, he realizes that watching them takes him into a different world.',
      link: '/',
    },
    {
      image: card2Image,
      title: 'Kid Joey: Fairytale Detective',
      description:
        'Thanks to his love of books and quick-thinking abilities, Joey gets to rescue all kinds of fairytale characters at his new school.',
      link: '/',
    },
    {
      image: card3Image,
      title: 'The Holiday Girls',
      description:
        'Chrissy Miss and her best friends live in Celebration City where, through everyday adventures, they always find a reason to celebrate.',
      link: '/',
    },
  ]
  return (
    <div className={style.library}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>
          Your favorite bedtime stories to fall in love with
        </h1>
        <p className={style.subtitle}>
          To really encourage storytelling and reading, you have to fall in love
          with the characters and the story. We will provide a constant stream
          of exciting new Storyworlds in every imaginable genre - falling in
          love guaranteed!
        </p>
      </div>
      <div className={style.counterWrapper}>
        {counters.map(counter => {
          return (
            <div className={style.counter} key={counter.label}>
              <span className={style.counterNumber}>{counter.number}</span>
              <span className={style.counterLabel}>{counter.label}</span>
            </div>
          )
        })}
      </div>
      <div className={style.cardsWrapper}>
        {cards.map(card => {
          return (
            <div className={style.card} key={card.title}>
              <img src={card.image} alt="" className={style.cardImage} />
              <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{card.title}</h3>
                <p className={style.cardDescription}>{card.description}</p>
                <Link to={card.link} className={style.ghostButton}>
                  Read more
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <Link to={'/library'} className={style.primaryButton}>
        Browse our library
      </Link>
      <footer className={style.footerWrapper}>
        <img src={bell} alt="" className={style.bellIcon} />
        <p className={style.footerText}>
          We’re releasing new Storyworlds every two weeks.
        </p>
      </footer>
    </div>
  )
}

export default Library
