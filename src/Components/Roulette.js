import React, {useState} from 'react'
import casino from '../images/casino.png'
import useSound from 'use-sound';
import rouletteSound from '../sounds/roulette.mp3';
import '../styles/roulette.scss';
import FormRoulette from './FormRoulette';
import Notification from './Notification'

function Roulette() {
  const [start, setStart ] = useState(false)
  const [mode, setMode] = useState('Number');
  const [play] = useSound(rouletteSound)
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('')
  const [disableBtn, setDisableBtn] = useState(true)
  const [luckyNumber, setLuckyNumber] = useState();
  const [luckycolor, setluckyColor] = useState(null)
  const [numbers] = useState(Array.from(Array(37).keys()))
  const [chosedNum, setChosedNum] = useState('N')

  const handelClickStart = () => {
    const randomNumber = Math.floor(Math.random() * 36 + 1)
    const randomColor = Math.floor(Math.random() * 2)
    let colors = ['black', 'red']
    setStart(true);
    play();
    setShow(false)
    setLuckyNumber('');
    setColor('')
      setTimeout(() => {
        setLuckyNumber(randomNumber);
        setStart(false);
        setShow(true)
        setColor(colors[randomColor])
      }, 9200)
      setTimeout(() => {
        setColor('')
        setLuckyNumber();
        setChosedNum('N')
        setluckyColor(null)
        setDisableBtn(true)
        setShow(false)
      }, 12900)
    }

  const reset = () => {
    setShow(false)
    setStart(false);
    setDisableBtn(true)
    setLuckyNumber('')
    setChosedNum('N')
    setMode('Number')
    setluckyColor()
    setColor('')
  }
  const handleClickLuckyNumber = e => {
      setDisableBtn(false)
      setChosedNum(Number(e))
  }
  const handleClickLuckyColor = e => {
       setDisableBtn(false)
       setluckyColor(e)
  }
  const generateNumbers = () => (
    numbers.map(num =>(
      <button
       key={num}
       value={num}
       onClick={(e) => handleClickLuckyNumber(e.target.value)}
       disabled={Number(num) === Number(chosedNum) || mode === 'color'}>
        {num}
      </button>
    ))
  )

    return (
        <div className='Roulette'>
          <FormRoulette mode={mode} setMode={setMode} reset={setDisableBtn}/>
          <img src={casino} alt='wheel' className={start ? 'roulette animation' : 'roulette'}/>
          {show && <Notification mode={mode} color={color} chosedNum={chosedNum} luckyNumber={luckycolor} luckycolor={luckycolor}/>}
          <div className='btn-numbers'>
            {generateNumbers()}
            <button 
                disabled={mode === 'Number' || luckycolor === 'black'} 
                onClick={e => handleClickLuckyColor(e.target.value)} 
                value='black' className='btn-black'>
                black
              </button>
            <button 
                disabled={mode === 'Number' || luckycolor === 'red'} 
                value='red' 
                onClick={e => handleClickLuckyColor(e.target.value)}
                className='btn-red'>
                red
            </button>
          </div>
              {mode === 'Number' && <p className={start ? 'lucky-number' : 'lucky-number bck-color'}>{luckyNumber}</p>}
              {mode === 'color' && <div style={{backgroundColor: color}} className={start ? '' : 'lucky-color'}></div>}
          <div className='btn-groups'>
            <button className='btn-spin' onClick={handelClickStart} disabled={disableBtn}>spin</button>
            <button className='btn-spin' onClick={reset} disabled={start}>reset</button>
           </div>
        </div>
    )
}

export default Roulette
