import React from 'react'
import "../assets/styles/style.css"
import imgOne from "../assets/images/diegocorriendo.png"
import imgTwo from "../assets/images/diegoconpelota.png"

const Home = () => {
    return (
        <div className='home'>
            <div className='football-legend'>
                <h1>- <span>FOOTBALL</span> <span>LEGEND</span> -</h1>
                <h2>...</h2>
            </div>
            <div className='text'>
                <h1 className='name'>MARADONA</h1>
                <p><span>30/10/1960</span>-<span>25/11/2020</span></p>
            </div>
            
            <div className='statistics'>

            </div>
        </div>
    )
}

export default Home