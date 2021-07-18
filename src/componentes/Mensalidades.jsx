import React from 'react'
import CardMensalidade from './CardMensalidade'
import './Mensalidades.css'
function Mensalidades() {
    return (
        <div className="m">
            <h1 className="title">Academy Packages</h1>
            <div className="Mensalidade">
                <CardMensalidade titulo="STANDART" valor="$99" yoga="------" freehand="------">></CardMensalidade>
                <CardMensalidade titulo="STANDART" valor="$199" yoga="Yoga" freehand="------">></CardMensalidade>
                <CardMensalidade titulo="STANDART" valor="$299" yoga="Yoga" freehand="Free Hand"></CardMensalidade>
            </div>
        </div>
         
    )
}

export default Mensalidades
