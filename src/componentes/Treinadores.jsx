import React from 'react'
import CardTreinadores from './CardTreinadores'
import './Treinadores.css'
import treinador1 from '../imagens/treinador1.jpg'
import treinador2 from '../imagens/tt.jpg'
import treinador3 from '../imagens/treinador3.jpg'
import treinador4 from '../imagens/treinador4.jpg'
function Treinadores() {
    return (
        <div>
            <h1 className="treinadoresTitulo">Academy Trainers</h1>
            <div className="Treinadores">
                <CardTreinadores imagem={treinador1} nome="John" sobrenome="Doe" funcao="Trainer" paragrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." botton="View More"></CardTreinadores>
                <CardTreinadores imagem={treinador3} nome="Jane" sobrenome="Miller" funcao="Trainer" paragrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." botton="View More"></CardTreinadores>
                <CardTreinadores imagem={treinador2} nome="Mike" sobrenome="Brown" funcao="Trainer" paragrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." botton="View More"></CardTreinadores>
                <CardTreinadores imagem={treinador4} nome="Anne" sobrenome="Monrol" funcao="Trainer" paragrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." botton="View More"></CardTreinadores>
            </div>
        </div>
         
    )
}

export default Treinadores
