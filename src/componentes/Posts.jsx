import React from 'react'
import CardPosts from './CardPosts'
import './Posts.css'
import imagem1 from '../imagens/image-index-2.jpg'
import imagem2 from '../imagens/image-index-3.jpg'
import imagem3 from '../imagens/image-index.jpg'
function Posts() {
    return (
        <div className="p">
            <div className="postTituloPrincipal"><h1>Academy Posts</h1></div>
            <div className="Posts">
                <CardPosts imagem={imagem1}></CardPosts>
                <CardPosts imagem={imagem2}></CardPosts>
                <CardPosts imagem={imagem3}></CardPosts>
            </div>
        </div>
    )
}

export default Posts
