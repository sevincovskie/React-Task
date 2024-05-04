
import { useState } from 'react';


export default function Count() {
  const [ count1, setCount1] = useState(0);
  const [ count2, setCount2] = useState(0);

  const changeX1 = () => {
    setCount1(count1-1);
  }

  const changeX2 = () => {
    setCount2(count2+1);
  }

  return (
  <div style={{
    border:"1px solid black", 
    width:"200px",
    margin:"40px auto",
    textAlign:"center",
    backgroundColor:"green"}}>
   <h1> Count: {count1 + count2}</h1>
   <button onClick={changeX1}>-</button>
   <button onClick={changeX2}>+</button>
  </div>
  
  );
}