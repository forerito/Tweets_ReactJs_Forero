import React, { useState, useEffect } from 'react'

import './GeneratorTweets.css'

export const GeneratorTweets = () => {

  const [values, setValues] = useState({
    tweets: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const [setError] = useState(false);
  const [register, setRegister] = useState([])
  const [text, setText] = useState('')
  const [showText, setShowText] = useState([])


  const handlePost = () => {
    if (values.tweets === '') {
      setError(true)
    } else if (values.tweets.length > 255) {
      setError(true)
    } else {
      setText(values)
      // ... register para hacer una copia del estado(todo su contenido) mas los nuevos elementos a agregar al estado
      setRegister([...register, values])
      setError(false)
    }
  }

  useEffect(() => {
    localStorage.setItem('register', JSON.stringify(register))
  }, [register])

  const handleShow = () => {
    let storedData = localStorage.getItem('register')
    setShowText(JSON.parse(storedData))
  }

  return (
    <div className='content'>
        <div className='container-tweet'>
          <h2 className='title'>Publica tu tweet</h2> <hr />
          <textarea className='textarea' name='tweets' onChange={handleInput} placeholder="Escribe un tweet {max 255 caracteres}" maxLength={255} value={values.tweets} />

          <div className='counter'>
            <p>{255 - values.tweets.length}/255</p>
          </div>
          <div className='buttons'>
            <button className='public' onClick={handlePost}>Publicar</button>
            <button onClick={handleShow}>Mostrar archivados</button>
          </div>

        </div>

        <div className='container-answer'>
          <p>{text.tweets}</p>
        </div>

     
        <h1 className='title'>Aquí se verán tus tweets archivados</h1>

      <div className='container-archive-tweets'>

        {showText.map((mostrar) => (
          <li className='tweets-archive'>{mostrar.tweets}</li>
        ))}

      </div>
    </div>
  )
}