
import React, { useState } from 'react'
import './App.css'

type TPoint ={
  x: number;
  y:number;
}

function App() {


// type TNum ={
//   min: number;
//   max:number;
// }




  const [point, setPoint] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  function handlePlaceCircle(e:React.MouseEvent<HTMLDivElement>){
        console.log(e)
        const {clientX, clientY} = e;
        setPoint([
          ...point, {
            x:clientX, 
            y:clientY
          }
        ]);
  }

  // UNDO FUNCTION

  function handleUndo(){
//TODO: remove the last point added on array
const newPoints = [...point]
const pointPopped = newPoints.pop()
if(!pointPopped) return;
setPopped([...popped, pointPopped])
setPoint(newPoints)

  }

// REDO FUNCTION 


   function handleRedo(){
//TODO: push the last point that has been popped
const newPopped = [...popped]
const poppedPoints  = newPopped.pop()
if(!poppedPoints) return
setPoint([...point, poppedPoints])
setPopped(newPopped)
   }

  return (

    <>
    <div className="btn">

    <button  disabled={point.length==0} onClick={handleUndo}>UNDO</button>
    <button  disabled={popped.length==0} onClick={handleRedo}>REDO</button>
    </div>

        <div className="App" onClick={handlePlaceCircle}>
         {point.map((point , idx) => 
         <div key={idx} className='point'
         style={{
          left:point.x -5.8 + "px",
          top: point.y -6+"px"
         }}>  
         </div>
      )}
       </div>
    
    </>
  )
}

export default App
