import React from 'react'
import './Feedback.css'
import info from '../imagens/info.jpg'
function Feedback() {
    return (
        <div className="Feedback">
            <div className="tituloFeed">
                <h1>Trusted Clients</h1>
            </div>
             
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          
            <div className="info">
                <img className="image" src={info} alt=""/><br/>
                <span className="nome">Millena Doe</span><br/>
                <span>Creative Director</span>
            </div>
            <div className="botao"> 
              <span>o</span>
              <span>o</span>
            </div>
             
        </div>
    )
}

export default Feedback
