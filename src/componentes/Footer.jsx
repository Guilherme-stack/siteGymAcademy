import React from 'react'
import './Footer.css'
import instagram from '../imagens/instagram (1).png'
import twitter from '../imagens/twitter (1).png'
import link from '../imagens/linkedin (1).png'
import gmail from '../imagens/gmail (1).png'
function Footer() {
    return (
        <div className="fo">
                <div className="Footer">
                <div className="consideracao"> <h3>Logo</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p> </div>
                <div className="services">
                        <h2>Our Services</h2>
                        <p>Bodybuilding</p>
                        <p>Gym Classes</p>
                        <p>Heavyweight</p>
                        <p>Running</p>
                        <p>Fitness</p>
                </div>
                <div className="links">
                        <h2>Quick Links</h2>
                        <p>Bodybuilding</p>
                        <p>Gym Classes</p>
                        <p>Heavyweight</p>
                        <p>Running</p>
                        <p>Fitness</p>
                </div>
                <div className="contact">
                        <h3>Feel free to contact us if tou have any question</h3>
                        <div className="email"> shopping@@gmail.com </div>
                        <div>fone:92 111-555-777-9</div>
                        <div className="local">Goiânia, Goiás, Brasil</div>
                </div>
                </div>
                <div className="redes">
                    <img src={instagram} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={gmail} alt=""/>
                </div>
 
                <h4 className="copy">copyright© 2020 by <strong>Guilherme Lima</strong>. All right reserved</h4>
        </div>
         
    )
}

export default Footer
