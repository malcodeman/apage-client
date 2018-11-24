import React from 'react'
import Review from './Review'
import style from './reviews.module.css'

function Reviews() {
  const reviews = [
    { text: "One of Time's 50 best inventions." },
    { text: "World's Most Innovative Companies 2018" },
    { text: 'The new generation of iPhone' },
  ]
  return (
    <section className={style.reviews}>
      {reviews.map(review => {
        return <Review text={review.text} />
      })}
    </section>
  )
}

export default Reviews
