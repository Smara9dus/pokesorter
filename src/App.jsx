import { useState } from 'react'
import './App.css'
import { generate } from './sort'

function App() {
  const [loading, setLoading] = useState(false);
  const [finalImage, setFinalImage] = useState(null);
  const [spriteSheet, setSpriteSheet] = useState('bw');
  const [shiny, setShiny] = useState(false);
  const [type, setType] = useState('normal');
  const [rand, setRand] = useState(true);
  const [opt1, setOpt1] = useState('h');
  const [opt2, setOpt2] = useState('l');
  const [opt3, setOpt3] = useState('g');


  const getImage = async () => {
    setLoading(true);
    setFinalImage(null);
    setFinalImage(await generate(spriteSheet, shiny, type, rand, opt1, opt2, opt3));
    setLoading(false);
  }

  const randomizeOpts = () => {
    const sprites = ["rb", "ysgb", "ygbc", "g", "s", "c", "gen3", "frlg", "dp", "p", "hgss", "bw"]
    const checkArr = [true, false];
    const typeArr = ["all", "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];
    const optsArr = ["l", "h", "s", "r", "g", "b", "rand", "n"];

    setSpriteSheet(sprites[Math.floor(Math.random()*sprites.length)]);
    setShiny(checkArr[Math.floor(Math.random()*checkArr.length)]);
    setType(typeArr[Math.floor(Math.random()*typeArr.length)]);
    setRand(checkArr[Math.floor(Math.random()*checkArr.length)]);
    setOpt1(optsArr[Math.floor(Math.random()*optsArr.length)]);
    setOpt2(optsArr[Math.floor(Math.random()*optsArr.length)]);
    setOpt3(optsArr[Math.floor(Math.random()*optsArr.length)]);
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
      <div className="content">
        <div className="select-wrapper">
          <div style={{display: 'flex'}}>
            <label for="spritesheet" >Spritesheet </label>
            <select name="spritesheet" value={spriteSheet} onChange={e => setSpriteSheet(e.target.value)} style={{margin: "0 1em 0 1em"}}>
              <option value="rb">Gen 1 (Red/Blue SGB)</option>
              <option value="ysgb">Gen 1 (Yellow SGB)</option>
              <option value="ygbc">Gen 1 (Yellow GBC)</option>
              <option value="g">Gen 2 (Gold)</option>
              <option value="s">Gen 2 (Silver)</option>
              <option value="c">Gen 2 (Crystal)</option>
              <option value="gen3">Gen 3 (Ruby/Sapphire/Emerald)</option>
              <option value="frlg">Gen 3 (Fire Red/Leaf Green)</option>
              <option value="dp">Gen 4 (Diamond/Pearl)</option>
              <option value="p">Gen 4 (Platinum)</option>
              <option value="hgss">Gen 4 (Heart Gold/Soul Silver)</option>
              <option value="bw">Gen 5 (Black and White)</option>
            </select>
            <label>
              <input type="checkbox" checked={shiny} onChange={() => setShiny(!shiny)} style={{marginRight: "1em"}}/> 
              Shiny
            </label>
          </div>
          <div style={{display: 'block', margin: "1em 0 0 0"}}>
          <label for="type">Type</label>
          <select name="type" value={type} onChange={e => setType(e.target.value)} style={{margin: "0 1em 0 1em"}}>
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
          </div>
          <div style={{display: 'block', margin: "1em 0 0 0"}}>
          <label for="option1">Sort options</label>
          <select name="option1" value={opt1} onChange={e => setOpt1(e.target.value)} style={{margin: "0 1em 0 1em"}}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
            <option value="rand">Random</option>
            <option value="n">None</option>
          </select>
          <select name="option2" value={opt2} onChange={e => setOpt2(e.target.value)} style={{margin: "0 1em 0 1em"}}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
            <option value="rand">Random</option>
            <option value="n">None</option>
          </select>
          <select name="option3" value={opt3} onChange={e => setOpt3(e.target.value)} style={{margin: "0 1em 0 1em"}}>
            <option value="l">L</option>
            <option value="h">H</option>
            <option value="s">S</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
            <option value="rand">Random</option>
            <option value="n">None</option>
          </select>
          </div>
          <div style={{display: 'block', margin: "1em 0 0 0"}}>
          <label style={{display: 'block'}}>
              <input type="checkbox" checked={rand} onChange={() => setRand(!rand)} style={{marginRight: "1em"}}/> 
              Randomize before sorting
            </label>
            </div>
        </div>
        <div style={{alignContent: 'center'}}>
      <button onClick={() => randomizeOpts()} style={{display: 'block', margin: "0 0 1em 0"}}>
        Randomize
      </button>
      <button onClick={() => getImage()} style={{display: 'block'}}>
        GO!
      </button>
      </div>
      </div>
      <div className="image-wrapper">
        {loading && <p>Loading...</p>}
        {finalImage && <img src={finalImage}/>}
      </div> 
    </>
  )
}

export default App
