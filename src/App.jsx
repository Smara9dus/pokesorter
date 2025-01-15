import { useState } from 'react'
import './App.css'
import { generate } from './sort'
import blackWhite from "./assets/black-white.png"

function App() {
  const [loading, setLoading] = useState(false)
  const [finalImage, setFinalImage] = useState(null)
  const [spriteSheet, setSpriteSheet] = useState('black-white')
  const [type, setType] = useState('normal')
  const [opt1, setOpt1] = useState('h')
  const [opt2, setOpt2] = useState('l')
  const [opt3, setOpt3] = useState('g')


  const getImage = async () => {
    setLoading(true);
    setFinalImage(null);
    setFinalImage(await generate(spriteSheet, type, opt1, opt2, opt3));
    setLoading(false);
  }

  return (
    <>
      <h1>Pokesorter</h1>
      <p className="subheader">
        Throw pokemon into a virtual meatgrinder and see what comes out.
      </p>
      <p className="subheader">
        Select options and hit GO to generate an image!
      </p>
      <div className="card">
        <div className="select-wrapper">
          <label for="spritesheet">Spritesheet</label>
          <select name="spritesheet" value={spriteSheet} onChange={e => setSpriteSheet(e.target.value)}>
            <option value="rb">Gen 1 (Red/Blue SGB)</option>
            <option value="ysgb">Gen 1 (Yellow SGB)</option>
            <option value="ygbc">Gen 1 (Yellow GBC)</option>
            <option value="g">Gen 2 (Gold)</option>
            <option value="s">Gen 2 (Silver)</option>
            <option value="c">Gen 2 (Crystal)</option>
            <option value="gs">Gen 2 Shiny (Gold)</option>
            <option value="ss">Gen 2 Shiny (Silver)</option>  
            <option value="cs">Gen 2 Shiny (Crystal)</option>
            <option value="gen3">Gen 3 (Ruby/Sapphire/Emerald)</option>
            <option value="frlg">Gen 3 (Fire Red/Leaf Green)</option>
            <option value="gen3s">Gen 3 Shiny (Ruby/Sapphire/Emerald)</option>
            <option value="frlgs">Gen 3 Shiny (Fire Red/Leaf Green)</option>
            <option value="dp">Gen 4 (Diamond/Pearl)</option>
            <option value="p">Gen 4 (Platinum)</option>
            <option value="hgss">Gen 4 (Heart Gold/Soul Silver)</option>
            <option value="dps">Gen 4 Shiny (Diamond/Pearl)</option>
            <option value="ps">Gen 4 Shiny (Platinum)</option>
            <option value="hgsss">Gen 4 Shiny (Heart Gold/Soul Silver)</option>
            <option value="bw">Gen 5 (Black and White)</option>
            <option value="bws">Gen 5 Shiny (Black and White)</option>
          </select>
          <label for="type">Type</label>
          <select name="type" value={type} onChange={e => setType(e.target.value)}>
            <option value="all">All</option>
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
          <label for="option1">Sort options</label>
          <select name="option1" value={opt1} onChange={e => setOpt1(e.target.value)}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
          </select>
          <select name="option2" value={opt2} onChange={e => setOpt2(e.target.value)}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
          </select>
          <select name="option3" value={opt3} onChange={e => setOpt3(e.target.value)}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
          </select>
        </div>
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
