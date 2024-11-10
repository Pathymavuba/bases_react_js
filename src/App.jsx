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
   
    
    
    setCount(count+1)
  
       
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[score])

  return (
    <div className='parent-component'>
      <Menu color="blue" firstMenu="Accueil" secondMenu="Service"/>
      <Menu color="yellow" firstMenu="Accueil" secondMenu="Service"/>
      <h2 style={{textAlign:"center"}}>{score}</h2>
      <h2 style={{textAlign:"center"}}>{count} fois</h2>
      <div style={{textAlign:"center"}}>
        {/* <button onClick={init}>Initialiser</button> */}
        <Button titre={"Initialiser"} handleAction={init} />
        <Button titre={"Augmenter"} handleAction={()=>setScore(score+1)} />
        <Button titre={"Diminuer"} handleAction={()=>score===0?setScore(0):setScore(score-1)} />
      </div>
      <Footer>
        <ol>
          <li>foot1</li>
          <li>foot1</li>
        </ol>
        <div>dggdgdg</div>
      </Footer>
    </div>
  )
}

export default App