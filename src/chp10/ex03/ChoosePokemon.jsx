import React from "react";

import img1 from './01.jpg';
import img2 from './imgs/02.jpg';
import img3 from './imgs/03.jpg';

const pokemons = [
    {
        id: 1,
        name: "이상해씨",
        type: "풀/독",
        img: img1,
    },
    {
        id: 2,
        name: "파이리",
        type: "불꽃",
        img: img2,
    },
    {
        id: 3,
        name: "꼬부기",
        type: "물",
        img: img3,
    },
]

function ChoosePokemon(props){
    return (
        <div>
            {
                pokemons.map((pokemon) => (
                        <div key={pokemon.id}>
                            <img className={pokemon.name} src={pokemon.img} alt={pokemon.name}/>
                            <div className={"pokemon-info"}>{pokemon.name}</div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ChoosePokemon;