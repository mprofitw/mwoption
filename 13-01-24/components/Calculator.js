
import React from "react";
const newWindow = () => {
    const myWindow = function(url, width, height) {
        const centerH = window.screen.height / 2;
        const centerW = window.screen.width / 2;
        const posX = centerW-width/2;
        const posY = centerH-height/2;
    
        window.open(url, "tytul-okna", `dialog=yes,width=${width},height=${height},left=${posX},top=${posY}`);
    };
    
    // const btn = document.querySelector("#testWindow");
  
        myWindow("http://localhost:3000/tasks", 600, 400);
  
}
const Calculator = () => {
    return ( 
        <button onClick={newWindow()}>Open new window</button>
        
     );
}
 
export default Calculator;