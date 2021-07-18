import React from 'react'
import  './Desconto.css'
import imagemDesconto from '../imagens/image-index.jpg'
function Desconto(){
    return (
        <div className="Desconto">
            <div className="ImagemDesconto">
                <img src={imagemDesconto} alt=""/>
            </div>
             <div className="promocao">
                <h1>Get special training this summer <strong>50%</strong> off pay now</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque at suspit nulla suscipit fringilla mauris, consequat nisl condimentum.</p>
                <div className="paynow">
                     <h1>PAY NOW</h1>
                </div>
            </div>
             
        </div>
    )
}
export default Desconto
