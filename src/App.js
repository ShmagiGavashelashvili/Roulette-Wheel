import React from 'react'
import Roulette from './Components/Roulette'

function App() {
  return (
    <div style={{height: '50rem', backgroundColor: '#333'}}>  
       <h1 className='text-center py-3 Roulette-title'>The Roulette Wheel</h1>
       <Roulette/>
    </div>
  );
}

export default App;
