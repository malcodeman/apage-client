import React from 'react'
import style from './features.module.css'

import iphone from '../../images/apple_iphone_xr_coral.png'

function Features() {
  const features = [
    {
      title: 'Growing collection of Storyworlds',
      subtitle:
        'Explore exciting Storyworlds in every imaginable genre for storytellers, readers and listeners from young to old.',
    },
    {
      title: 'Stories to fall in love with',
      subtitle:
        'Storyworlds are growing collections of thematically-related stories written by authors from around the world.',
    },
    {
      title: 'Become a better storyteller',
      subtitle:
        'Join the Storytelling School for families to learn important storytelling techniques.',
    },
    {
      title: 'Endless source of storylines',
      subtitle:
        'Interactively create your very own adventures - generate millions of hilarious stories in your genre of choice.',
    },
  ]
  return (
    <div className={style.features}>
      <div>
        <h3 className={style.title}> A platform for families </h3>
        <p className={style.subtitle}>
          We deeply care about captivating stories - Bedtime Stories is built to
          help you tell better stories and helps you engage with your family
          through storytelling.
        </p>
        <div className={style.featuresWrapper}>
          {features.map(feature => {
            return (
              <div className={style.feature}>
                <h4 className={style.featureTitle}>{feature.title}</h4>
                <p className={style.featureSubtitle}>{feature.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.screens}>
        <img src={iphone} alt="" className={style.screen} />
      </div>
    </div>
  )
}

export default Features
