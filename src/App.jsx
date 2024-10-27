import React, { useEffect, useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Footer from './component/Footer'
import Button from './component/bouton'

const App = () => {
  const [score,setScore] = useState(0)
  const [count,setCount] = useState(0)

  const init = () =>{
    setScore(0)
  }

  useEffect(()=>{
    setTimeout(()=>setCount(count+1),1000)
  })

  return (
    <div className='parent-component'>
      <Menu color="blue" firstMenu="Accueil" secondMenu="Service"/>
      <Menu color="yellow" firstMenu="Accueil" secondMenu="Service"/>
      <h2 style={{textAlign:"center"}}>{score}</h2>
      <h2 style={{textAlign:"center"}}>{count}</h2>
      <div style={{textAlign:"center"}}>
        {/* <button onClick={init}>Initialiser</button> */}
        <Button titre={"Initialiser"} handleAction={init} />
        <Button titre={"Augmenter"} handleAction={()=>setScore(score+1)} />
        <Button titre={"Diminuer"} handleAction={()=>setScore(score-1)} />
      </div>
      <Footer />
    </div>
  )
}

export default App