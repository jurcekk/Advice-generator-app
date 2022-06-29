import React, { Fragment, useEffect, useState } from 'react';
import "./style/index.scss";
import './App.css';

function App() {
  const [advice, setAdvice] = useState([]);
//https://api.adviceslip.com/advice

useEffect(()=> {
  fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
  }).then(function(data){
    let advice:any = [data.slip.advice, data.slip.id]
    setAdvice(advice);
  } )
}, [])
  return (
    <Fragment>
    <h1>{advice}</h1>
     
    </Fragment>
  );
}


export default App;
