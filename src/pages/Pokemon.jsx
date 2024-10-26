import React from "react";

function Pokemon() {
  const id = window.location.pathname.split("/")[2];

  const pokemon = ["bulbasaur", "charmander", "squirtle"];

  if (!pokemon.includes(id)) {
    return <div>Pokemon not found</div>;
  }

  return <div>{id}</div>;
}

export default Pokemon;
