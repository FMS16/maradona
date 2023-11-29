import React from 'react'
import "../assets/styles/style.css"
import img from "../assets/images/14303adb8ea570bb5d4c92da44422f36.jpg"

const Biography = () => {
    return (
        <div className='biography'>
            <h1 className='section-title'>BIOGRAPHY</h1>
            <div className='container flex'>
            <div className='biography-item'>
                    <img src={img} />
                </div>
                <div className='biography-item'>
                    <p>Diego Maradona was an Argentine football legend, born on October 30, 1960, in Buenos Aires, Argentina.
                        Widely regarded as one of the greatest footballers of all time,
                        Maradona's extraordinary career was marked by exceptional skill, creativity, and a charismatic personality.
                    </p>
                    <p>
                        Maradona gained international fame during the 1986 FIFA World Cup in Mexico,
                        where he led Argentina to victory and showcased some of the most iconic moments in football history. His infamous "Hand of God" goal,
                        where he used his hand to score, and the breathtaking solo effort known as the "Goal of the Century" highlighted his unparalleled talent.
                    </p>
                    <p>
                        Over his career, Maradona played for renowned clubs such as Boca Juniors, Barcelona, and Napoli.
                        His time with Napoli, in particular, saw him lead the team to unprecedented success, winning two Serie A titles and a UEFA Cup.
                    </p>
                    <p>
                        Off the field, Maradona's life was marked by controversies and personal struggles, including battles with substance abuse.
                        Despite these challenges, his impact on the sport remained undeniable, and he continued to be a revered figure in global football.
                    </p>
                    <p>
                        Diego Maradona passed away on November 25, 2020, leaving behind a legacy that transcends the football pitch.
                        His influence on the game, his memorable moments, and his enduring popularity among fans make him an immortal figure in the history of football.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Biography