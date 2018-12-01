import React from 'react'

import style from './reviews.module.css'

function Reviews() {
  const reviews = [
    {
      body:
        'We absolutely love it! Especially the story builder is so fun - the kids love telling the stories on their own. Thumbs up for the concept and the easy interface!',
      author: 'meramap',
    },
    {
      body:
        'This is a marvelous app which helps the parents tell terrific tales to children. Lots to choose from <3 and wonderful illustrations too.',
      author: 'Julei Hodgson',
    },
    {
      body:
        'Bedtime used to be a chore and there was always the bartering session of “Awww just 5 minutes more!”. Now we are racing to bed to read a bedtime stories on the app... Our personal favourites have to be the cheery Dinosaur, how can you resist being his best friend! With bite-sized stories that suit us down to the ground, bedtimes just got a whole lot better! 5 STARS!!',
      author: 'Citykitty79',
    },
  ]
  return (
    <section className={style.reviews}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Why parents love us</h1>
        <p className={style.subtitle}>
          A small selection of reviews of Bedtimes Stories on the App Store.
        </p>
      </div>
      <div className={style.reviewsWrapper}>
        {reviews.map(review => {
          return (
            <div key={review.author}>
              <div className={style.reviewCard}>
                <p className={style.reviewBody}>{review.body}</p>
              </div>
              <footer className={style.reviewFooter}>
                <span className={style.reviewAuthor}>{review.author}</span>
              </footer>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
