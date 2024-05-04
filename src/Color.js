 import { useState } from "react";


 let style = {
    border:"1px solid yellow", 
    width:"200px",
    height:"200px",
    margin:"40px auto",
}
 export default function Color () {

    const [color,setColor] = useState();

    const changeColor = (color) => {
        setColor(color);
    };

    return (
        <div style={{...style, backgroundColor: color}}>
           

         <button onClick={()=> changeColor("blue")}>Blue</button>
         <button onClick={()=> changeColor("red")}>Red</button>
         <button onClick={()=> changeColor("black")}>Black</button>

         
        </div>
        
        );
      }
 