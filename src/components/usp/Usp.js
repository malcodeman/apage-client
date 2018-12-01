import React from 'react'

import family from '../../images/family.svg'
import bookshelf from '../../images/bookshelf.svg'
import book from '../../images/book.svg'
import style from './usp.module.css'

function Usp() {
  const usps = [
    {
      icon: family,
      title: 'Quality Family Time',
      subtitle:
        'Storytelling plays a vital role when growing up. Create lasting memories and embark on fantastic journeys with beloved characters.',
    },
    {
      icon: bookshelf,
      title: 'Teach Valuable Life Lessons',
      subtitle:
        'We deeply care about diversity and empowerment - each Storyworld contains educational aspects and storytelling tips to teach valuable life lessons.',
    },
    {
      icon: book,
      title: 'A Safety Net for Storytelling',
      subtitle:
        'Each bedtime story includes an easy-to-remember summary of Storypoints and the interactive Storybuilder generates millions of exciting storylines.',
    },
  ]
  return (
    <section className={style.usp}>
      {usps.map(usp => {
        return (
          <div key={usp.title} className={style.card}>
            <img src={usp.icon} alt="" className={style.icon} />
            <h3 className={style.title}>{usp.title}</h3>
            <p className={style.subtitle}>{usp.subtitle}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Usp
