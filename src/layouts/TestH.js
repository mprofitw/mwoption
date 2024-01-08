import "../sass/tasks.scss";
import React, { useState } from 'react';

const NewApp =() =>{
const [counter, setCounter] = useState(0)
const handleClick = () =>{
    setCounter(counter + 1)
}
return(
    <>
    <button className="cent" onClick={handleClick}>Kliknij </button>
   <h1 className="cent">{counter}</h1>
    </>
)
}
export default NewApp
// ReactDOM.render(<NewApp/>, document.getElementById('root'));