import './App.css'

const PokemonideListiElement = (props) => {
    return (
        <div className="nimi" onClick={() => { props.pariPokemoniInfo(props.pokemon.url) }}>{props.pokemon.name}{props.pokemon.id}</div>
    )
}

const PokemonideList = (props) => {
    return (
        <div className="pokeList">
            {props.pokemonid.map(
                pokemon =>
                    <PokemonideListiElement
                        key={pokemon.name}
                        pokemon={pokemon}
                        pariPokemoniInfo={props.pariPokemoniInfo}
                    />
            )}
        </div>
    )
}

export default PokemonideList