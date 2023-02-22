import React from 'react'
import hero from './hero.module.css'
function Hero() {
  return (
    <>
    <section className={hero.hero_big_div}>
      <div>
        <h1>Stay curious.</h1>
        <p>Discover stories, thinking, and<br/>expertise from writers on any topic.</p>
         <button>Start reading</button>
      </div>

    </section>
    </>
  )
}

export default Hero