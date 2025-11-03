import {React, useState} from "react";

import img1 from './01.jpg';
import img2 from './imgs/02.jpg';
import img3 from './imgs/03.jpg';

// 포켓몬 3마리의 정보를 가진 리스트 생성.
const pokemons = [
    {
        id: 1,
        name: "이상해씨",
        type: "풀/독",
        info: "씨앗 포켓몬",
        img: img1,
        color: ["green", "violet"],
        story: "태어났을 때부터 등에 식물의 씨앗이 있으며 조금씩 크게 자란다.\n",
    },
    {
        id: 2,
        name: "파이리",
        type: "불꽃",
        info: "도롱뇽 포켓몬",
        img: img2,
        color: "red",
        story: "태어날 때부터 꼬리의 불꽃이 타오르고 있다. 불꽃이 꺼지면 그 생명이 다하고 만다.\n",
    },
    {
        id: 3,
        name: "꼬부기",
        type: "물",
        info: "꼬마 거북 포켓몬",
        img: img3,
        color: "skyblue",
        story: "기다란 목을 등껍질 속에 감춘 다음 기세 좋게 물대포를 발사한다.",
    },
]


function Pokedex(props){
    // useState = 함수형 컴포넌트에서 클래스형 컴포넌트처럼 state를 쓸 수 있게 해줌.
    // hoverdStory라는 state 값을, setHoveredStory라는 설정 함수를 호출해 리렌더링 시킨다.
    const [hoveredStory, setHoveredStory] = useState("원하는 포켓몬 이미지를 선택하세요.");

    return (
        <div className={"pokemon-container"}>
            <h1 className={"pokemon-title"}>포켓몬 도감</h1>
            <div className={"pokemon-story"}>{hoveredStory}</div>
            <div className={"pokemon-list"}>
                {
                    pokemons.map((pokemon) => (
                            <div
                                className={"pokemon-card"} key={pokemon.id}
                                onMouseEnter={() => setHoveredStory(pokemon.story)}
                                onMouseLeave={() => setHoveredStory("원하는 포켓몬 이미지를 선택하세요.")}
                            >
                                <img className="pokemon-img" src={pokemon.img} alt={pokemon.name}/>
                                {/* style은 아래 코드와 같이 style={textAlign: 'center'} 이렇게 줘야한다.*/}
                                <div className={"pokemon-info"} style={{textAlign: 'center', text: ''}}>
                                    <h3>{pokemon.name}</h3>
                                    {/*<p>{pokemon.info}</p>*/}
                                    {/*<p>{pokemon.type}</p>*/}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Pokedex;