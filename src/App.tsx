import { useEffect, useState } from "react";
import icon from "./images/icon-dice.svg";
import "./style/index.scss";

function App() {
  const [advice, setAdvice] = useState<string[]>([]);

  function Loading() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        let advice: string[] = [data.slip.advice, data.slip.id];
        setAdvice(advice);
      });
  }

  useEffect(() => {
    Loading();
  }, []);

  return (
    <div className='container'>
      <div className='card'>
        <p className='id'>ADVICE #{advice[1]}</p>
        <p className='advice'>{advice[0]}</p>
        <div className='dividerContainer'></div>
        <div className='iconContainer' onClick={Loading}>
          <img src={icon} alt='Icon' className='icon' />
        </div>
      </div>
    </div>
  );
}

export default App;
