import { useState } from 'react'
import './App.css'
import { generate } from './sort'
import blackWhite from "./assets/black-white.png"

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [finalImage, setFinalImage] = useState(null)
  const [spriteSheet, setSpriteSheet] = useState('black-white')
  const [type, setType] = useState('normal')
  const [opt1, setOpt1] = useState('l')
  const [opt2, setOpt2] = useState('h')
  const [opt3, setOpt3] = useState('l')


  const getImage = async () => {
    setLoading(true);
    setFinalImage(null);
    setFinalImage(await generate(spriteSheet, type, opt1, opt2, opt3));
    setLoading(false);
  }

  return (
    <>
      <h1>Pokesorter</h1>
      <p className="read-the-docs">
        Select options and hit GO to generate an image!
      </p>
      <div className="card">
      <select name="spritesheet" value={spriteSheet} onChange={e => setSpriteSheet(e.target.value)}>
        <option value="black-white">Black and White</option>
        <option value="black-white-shiny">Black and White (Shiny)</option>
      </select>
      <select name="type" value={type} onChange={e => setType(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
      </select>
      <select name="option1" value={opt1} onChange={e => setOpt1(e.target.value)}>
        <option value="l">L</option>
        <option value="h">H</option>
        <option value="s">S</option>
      </select>
      <select name="option2" value={opt2} onChange={e => setOpt2(e.target.value)}>
        <option value="l">L</option>
        <option value="h">H</option>
        <option value="s">S</option>
      </select>
      <select name="option3" value={opt3} onChange={e => setOpt3(e.target.value)}>
        <option value="l">L</option>
        <option value="h">H</option>
        <option value="s">S</option>
      </select>
      <button onClick={() => getImage()}>
        GO!
      </button>
      </div>
      {loading && <p>Loading...</p>}
      {finalImage && <img src={finalImage}/>}
    </>
  )
}

export default App
