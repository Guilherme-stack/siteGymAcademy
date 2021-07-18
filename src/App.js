import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './componentes/Header';
import Welcome from './componentes/Welcome';
import Beneficios from './componentes/Beneficios';
import Desconto from './componentes/Desconto';
import Horarios from './componentes/Horarios';
import Treinadores from './componentes/Treinadores';
import Mensalidades from './componentes/Mensalidades';
import Feedback from './componentes/Feedback';
import Posts from './componentes/Posts';
import Galeria from './componentes/Galeria';
import Contato from './componentes/Contato';
import Footer from './componentes/Footer';
 
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Welcome></Welcome>
        <Beneficios></Beneficios>
        <Desconto></Desconto>
        <Horarios></Horarios>
        <Treinadores></Treinadores>
        <Mensalidades></Mensalidades>
        <Feedback></Feedback>
        <Posts></Posts>
        <Galeria></Galeria>
        <Contato></Contato>
        <Footer></Footer>
    </div>
  );
}

export default App;
