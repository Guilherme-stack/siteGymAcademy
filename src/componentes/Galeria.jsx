import React from 'react'
import './Galeria.css'
import galeria1 from '../imagens/galeria1.jpg'
import galeria2 from '../imagens/galeria2.jpg'
import galeria3 from '../imagens/galeria3.jpg'
import galeria4 from '../imagens/parallax2.jpg'
import galeria5 from '../imagens/image-index.jpg'
import galeria6 from '../imagens/image-index-3.jpg'
function Galeria() {
    return (
        <div className="g">
            <div className="tituloGaleria">
                <h1>Academy Galeria</h1>
            </div>
            <div className="Galeria">
                <img src={galeria1} alt=""/>
                <img src={galeria2} alt=""/>
                <img src={galeria3} alt=""/>
                <img src={galeria4} alt=""/>
                <img src={galeria5} alt=""/>
                <img src={galeria6} alt=""/>
            </div>
        </div>
    )
}

export default Galeria
