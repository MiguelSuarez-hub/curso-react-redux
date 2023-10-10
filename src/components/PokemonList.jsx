/* eslint-disable react/prop-types */
import PokemonCard from './PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        const abilitiesArray = pokemon.types;
        const abilities = abilitiesArray.map((ability) => ability.type.name);
        
        return <PokemonCard name={pokemon.name} imagen={pokemon.sprites.front_default} abilities={abilities} id={pokemon.id} favorite={pokemon.favorite} key={pokemon.name} />;
      })}
    </div>
  );
}

export default PokemonList;