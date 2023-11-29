import React from 'react'
import "../assets/styles/style.css"
import img from "../assets/images/c4.jpg"

const Legacy = () => {
  return (
    <div className='legacy'>
      <h1 className='section-title'>MARADONA'S LEGACY</h1>
      <div className='container flex'>
        <div className='legacy-item'>
          <p>
            Diego Maradona's legacy is a tapestry woven with the threads of brilliance, controversy, and unbridled passion for the beautiful game. Hailing from the slums of Buenos Aires, he emerged as a footballing wizard, captivating the world with his extraordinary skill and flair.
          </p>
          <p>
            However, Maradona's legacy is not confined to the pitch. His tumultuous personal life, including battles with addiction and health issues, added layers of complexity to his narrative. Yet, it is this very vulnerability that endeared him to millions, humanizing an icon who transcended the sport. The Hand of God and the Goal of the Century remain iconic moments, encapsulating the dichotomy of his genius and imperfection.
          </p>
          <p>
            Maradona's impact transcends borders; he is a global cultural phenomenon. His legacy echoes in the style of countless players who followed, attempting to replicate the magic he effortlessly conjured. Off the field, he became a larger-than-life figure, a symbol of defiance against societal expectations.
          </p>
          <p>
            In the wake of his passing in 2020, the outpouring of grief and tributes from fans, fellow players, and dignitaries showcased the indelible mark Maradona left on the world. His legacy is a reminder that football is not just a game; it's a canvas for legends to paint stories that resonate far beyond the final whistle.
            Diego Maradona, flawed and sublime, remains immortal in the hearts of those who witnessed his artistry and passion for the sport.
          </p>
        </div>
        <div className='legacy-item'>
          <img src={img}></img>
        </div>
      </div>
    </div>
  )
}

export default Legacy