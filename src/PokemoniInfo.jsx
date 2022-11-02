import './App.css'

const Pokemon = (props) => {
    console.log(props)
    return (
        <div className="pokeinfo">
            <div className="nimiId">
                <div className="nimi">{props.pokemon.name}</div>
                <div className="id">ID:{props.pokemon.id}</div>
            </div>
            <img src={props.pokemon.sprites.front_default} />
            <div className="kaal">Kaal: {props.pokemon.weight}kg</div>
            <div className="korgus">Kõrgus: {props.pokemon.height}ft</div>
        </div>
    )
}

export default Pokemon