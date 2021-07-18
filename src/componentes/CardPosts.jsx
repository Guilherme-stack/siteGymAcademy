import React from 'react'
import './CardPosts.css'
import like from '../imagens/like.png'
import comment from '../imagens/speech-bubble.png'
import calendario from '../imagens/calendario-semanal.png'
function CardPosts(props) {
    return (
        <div className="CardPosts">
            <div className="imagePost">
                <img src={props.imagem} alt=""/>
            </div>
            <h2 className="postTitulo">Duis ultricies aliquet mauris</h2>
            <p className="postData"> <span><img src={calendario} alt=""/></span> July 26, 2016</p>
            <h3 className="postNome">By: <strong>John Doe</strong> Category: <strong>Fitness</strong></h3>
            <p className="postTexto">In congue lorem dignissim leo lacinia efficitur nam suscipit dui eros vel sagittis urna viverra vel cras cursus porta porttitor.</p>
            <div className="like">
                <span className="readMore">Read More</span>
                <div><span><img src={like} alt=""/></span> <span><img src={comment} alt=""/></span>  </div>
            </div>
        </div>
    )
}

export default CardPosts
