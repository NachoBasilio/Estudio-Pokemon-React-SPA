import React, { Component } from 'react'
import "./styles/Card.css"


export class Card extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className="Tarjeta">
                <div className="Tarjeta__info">
                    <p className="Tarjeta__infoNombre">{this.props.name}</p>
                    <p className="Tarjeta__infoTipo">{this.props.type1}</p><p className="Tarjeta_infoTipo">{this.props.type2}</p>
                    <p className="Tarjeta__infoNumero">{"Numero: "+this.props.id}</p>
                </div>
                <figure className="Imagen__contenedor">
                    <img className="Imagen__contenedor__imagen" src={this.props.spirte} alt=""/>
                </figure>
            </div>
        )
    }
}

export default Card
