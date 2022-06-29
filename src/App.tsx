import React, { useEffect, useState } from 'react';
import "./style/index.scss";
import divider from "./images/pattern-divider-desktop.svg";
import icon from "./images/icon-dice.svg";
import './App.css';

function App() {
  const [advice, setAdvice] = useState([]);
//https://api.adviceslip.com/advice

function Loading() {
  fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
  }).then(function(data){
    let advice:any = [data.slip.advice, data.slip.id]
    setAdvice(advice);
  } )
}
useEffect(()=> {
  Loading();
}, [])

  return (
    <div className="container">
       {/* <h1>{advice}</h1> */}
     <div className="card">
      <p className='id'>ADVICE #{advice[1]}</p>
      <p className='advice'>
        {advice[0]}
      </p>
      <div className='dividerContainer'>
      </div>
      <div className='iconContainer' onClick={Loading}>
      <img src={icon} alt="Icon" className='icon'/>
      </div>
     </div>
     </div>
   
  );
}


export default App;
