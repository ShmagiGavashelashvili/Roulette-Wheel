import React from 'react'
import '../styles/roulette.scss'

function Notification({mode, chosedNum, luckyNumber, color, luckycolor}) {
    return (
        <div className='notification not-animation'>
               {mode === 'Number' ? (Number(chosedNum) === Number(luckyNumber)) && <img className='winner' alt='winner' src='https://media.giphy.com/media/g9582DNuQppxC/source.gif'/>: 
                mode === 'color' ? (color === luckycolor && <img className='winner' alt='winner' src='https://media.giphy.com/media/g9582DNuQppxC/source.gif'/>) : ''}

              {mode === 'Number' ? (Number(chosedNum) !== Number(luckyNumber)) && <img className='looser' alt='looser' src='https://media.giphy.com/media/14xreOl4Yva0dW/source.gif'/>:
               mode === 'color' ? (color !== luckycolor && <img className='winner' alt='winner' src='https://media.giphy.com/media/14xreOl4Yva0dW/source.gif'/>) : '' }
           </div>
    )
}

export default Notification