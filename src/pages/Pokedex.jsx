import React from 'react'
import Pokemon from '../components/Pokedex/Pokemon'
import Navbar from '../components/Pokedex/Navbar'
import Searcher from '../components/Pokedex/Searcher'

function Pokedex() {
  return (
    <div>
      <Navbar/>
      <Searcher/>
      <Pokemon/>
    </div>
  )
}

export default Pokedex
