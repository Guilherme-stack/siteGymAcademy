import React from 'react'
import './CardMensalidade.css'
function CardMensalidade(props) {
    return (
            <div className="CardMensalidade">
                <h1 className="titulo">STANDART</h1>
                <h1 className="valor">{props.valor}<strong>/month</strong></h1>
                <h3>Bodybuilding</h3>
                <h3>Running</h3>
                <h3>Fitness</h3>
                <h3>{props.yoga}</h3>
                <h3>{props.freehand}</h3>
                <div className="view">View More</div>         
            </div>
    )
}

export default CardMensalidade
