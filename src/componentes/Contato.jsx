import React from 'react'
import './Contato.css'
function Contato() {
    return (
        <div className="c">
            <div  className="tituloContato"> <h1>Send Message</h1></div>
            
            <div className="Contato">
                <form action="">
                    <div><label htmlFor="">Your Name</label><br/>
                        <input type="text"/><br/>
                        <label htmlFor="">Your Email</label><br/>
                        <input type="text"/><br/>
                    </div>
                     
                     <div>
                        <label htmlFor="">Your Fone Number</label><br/>
                        <input type="text"/><br/>
                        <label htmlFor="">Your Message</label><br/>
                        <textarea name="" id="" cols="1" rows="1"></textarea>
                     </div>
                    
                     
                </form>
               
               <span className="sendMessage">SEND MESSAGE</span>
            </div>
        </div>
    )
}

export default Contato
