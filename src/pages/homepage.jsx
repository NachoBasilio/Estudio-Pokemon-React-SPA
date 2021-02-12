import React, { Component } from 'react'
import Title from "../components/Title"
import MoreButton from "../components/MoreButton"
import Card from "../components/Card"
import "./styles/homepage.css"

export class homepage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data :[
                {
                    "name": "Charmander",
                    "type1": "Fire",
                    "type2": "",
                    "id": 4,
                    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                },
                {
                    "name": "Pidgeot",
                    "type1": "Normal",
                    "type2": "Flying",
                    "id": 18,
                    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
                },
                {
                    "name": "Emolga",
                    "type1": "Electric",
                    "type2": "Flying",
                    "id": 587,
                    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png"
                }
            ]
        }
    }
    render() {
        return (
            <div className="Contenedor-Master">
              <Title/> 
              {this.state.data.map((pokemon) => {
                  return(
                  <Card 
                  name={pokemon.name}
                  type1={pokemon.type1}
                  type2={pokemon.type2}
                  id={pokemon.id}
                  spirte={pokemon.sprite}/>
                    )
              })}
              
              <MoreButton/>
            </div>
        )
    }
}

export default homepage
