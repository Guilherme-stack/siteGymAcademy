import React,{useState} from 'react'
import './Header.css'
function Header() {
    const [menu, setMenu] = useState(false)
    
    function abrirMenu(params) {
        menu===false? setMenu(true):setMenu(false)
    }
    console.log(document.body.scrollWidth)

    return (
        <div className="Header">
            <div className="logo">Logo</div>
            <nav className={menu === true ? 'menu': 'menu-nao-clicado'}  >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Classes</li>
                    <li>Shedule</li>
                    <li>Coaches</li>
                    <li>Packages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="register">
                Register
            </div>
            <div id="menu-responsivo" onClick={abrirMenu}>
                =
            </div>
        </div>
        
    )
}

export default Header
