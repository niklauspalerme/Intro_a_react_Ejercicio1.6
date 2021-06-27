import React, { useState } from 'react'
import Botton from './componentes/boton';

const App = () => {

  //Estados
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Controladores de Eventos
  const increaseGood = ()=>{
    setGood (good + 1);
  }

  const increaseBad = () =>{
    setBad(bad + 1);
  }

  const increaseNeutral = () =>{
    setNeutral(neutral + 1);
  }

  const getTotal = () =>{
    return (good + bad +neutral);
  }

  const porcentajePositivo = ()=>{
    if (isNaN((good/getTotal())*100))
      return 0
    else
      return ((good/getTotal())*100);
  }

  const promedio = ()=>{

    if (isNaN((good/getTotal())*100))
      return 0
    else
      return (
        ( (good * 1)+ (neutral * 0)+ (bad * -1))/getTotal()
      )
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Botton name="Good" handleClick={increaseGood}/>
      <Botton name="Bad" handleClick={increaseBad}/>
      <Botton name="Neutral" handleClick={increaseNeutral}/>
      <h1>Statitics</h1>
      <h1> Good: {good}</h1>
      <h1> Bad: {bad}</h1>
      <h1> Neutral: {neutral}</h1>
      <h1>All: {getTotal()}</h1>
      <h1>Positive: {porcentajePositivo()}</h1>
      <h1>Average : {promedio()}</h1>
    </>
  )
}


export default App;
