import React, { Component } from 'react'
import Title from "../components/Title"
import MoreButton from "../components/MoreButton"
import "./styles/homepage.css"

export class homepage extends Component {
    render() {
        return (
            <div className="Contenedor-Master">
              <Title/>  
              <MoreButton/>
            </div>
        )
    }
}

export default homepage
