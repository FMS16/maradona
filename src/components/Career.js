import React from 'react'
import "../assets/styles/style.css"
import img from "../assets/images/diego-maradona-5.png"
import world from "../assets/images/copadelmundo.png"

const Career = () => {
  return (
    <div className='career'>
        <h1 className='section-title'>CAREER</h1>
        <div className='container flex'>
            <div className='career-item'>
              <img src={img} />
            </div>
            <div className='career-item'>
              <div className='matches'>
                <h1>678</h1>
                <h2>matches</h2>
              </div>
              <div className='goals'>
                <h1 className='gold'>342</h1>
                <h2>goals</h2>
              </div>
              <div className='assists'>
                <h1 className='gold'>213</h1>
                <h2>assists</h2>
              </div>
              <div className='world-cup'>
                <img src={world} />
                <h2 className='gold'>1 world cup</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Career