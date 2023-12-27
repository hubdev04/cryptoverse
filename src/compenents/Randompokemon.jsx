import React from 'react'
import App from '../App.css'
const Randompokemon = ({from}) => {
    const url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    const random=Math.floor(Math.random()*151);
    return (
    <div  className="pokemon">
      <h1>#{random+" "+from}</h1>
      <img src={url+random+'.png'}></img>
    </div>
  );
}

export default Randompokemon
