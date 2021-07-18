import React from 'react'
import './Beneficios.css'
import academia1 from '../imagens/academia-1.png'
import academia2 from '../imagens/ciclo-1.png'
import academia3 from '../imagens/exercite-se-1.png'
import academia4 from '../imagens/academia-3.png'
import CardBeneficios from './CardBeneficios'
function Beneficios(props) {
    return (
        <div className="B">
            <h1 className="TituloBeneficios">Academy Classes</h1>
            <div className="Beneficios">
             <CardBeneficios titulo="Heavy Weight" subtitulo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={academia4}></CardBeneficios>
             <CardBeneficios titulo="Weight Reduce" subtitulo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={academia3}></CardBeneficios>
             <CardBeneficios titulo="Body Building" subtitulo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={academia2}></CardBeneficios>
             <CardBeneficios titulo="Indoor Cycling" subtitulo="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={academia1}></CardBeneficios>
        </div>
        </div>
         
        
    )
}

export default Beneficios
