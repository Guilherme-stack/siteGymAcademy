import React from 'react'
 
import './CardBeneficios.css'
function CardBeneficios(props) {
    return (
        <div className="CardBeneficios">
             <div className="imagem">
                <img src={props.image} alt=""/>
             </div>
                 
             
            <h2>{props.titulo}</h2>
            <hr/>
            <p>{props.subtitulo}</p>
            <h4>Read More</h4>
        </div>
    )
}
export default CardBeneficios
