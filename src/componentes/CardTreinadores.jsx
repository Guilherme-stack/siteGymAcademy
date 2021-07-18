import React from 'react'
import './CardTreinadores.css'
function CardTreinadores(props) {
    return (
        <div className="CardTreinadores">
            <div>
                <img src={props.imagem} alt=""/>
            </div>
            <h3>{props.nome} <strong>{props.sobrenome}</strong> </h3>
            <h4>{props.funcao}</h4>
            <p>{props.paragrafo}</p>
            <div className="viewMore"> 
                {props.botton}
            </div>
        </div>
    )
}

export default CardTreinadores
