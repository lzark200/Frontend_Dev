import { useState } from 'react'


function App() {
  const [counter , setCounter] = useState(0) ; 
  const [count] = useState(()=>expensiveCalculation()) ; 

  function expensiveCalculation(){
    let cnt = 0 ; 
    for(let i = 1 ; i<=1000 ; i++)cnt++ ; 
    return cnt ; 
  }

  return (
    <>
      <div>{count}</div>
      <Button cnt = {counter} scnt = {setCounter}></Button>
    </>
  )
}

function Button({cnt , scnt}){
  return (
    <button onClick={()=>scnt(cnt+1)}>
      {cnt}
    </button>
  )
}

export default App
