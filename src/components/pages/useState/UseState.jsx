import React, { useState, useEffect } from 'react'

import './UseState.css'

export const UseState = () => {

  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("black");


  useEffect(() => {
    contador > 9 ? setColor('blue') : setColor('black')
  }, [contador])

  const resetContador = () => {
    setContador(0);
  };


  return (
    <>
      <h1>Counter</h1>
    <div className="container-state">
      <h2 style={{ color: color }}>{contador}</h2>
      <div className="container-buttons">
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={resetContador}>Reset</button>
      </div>
    </div>
    </>
  )
}