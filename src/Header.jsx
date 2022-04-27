import './App.css'
import './App-Hover.css'

const activeEfect = (id) => {
  console.log(id);
}

export default function Header(){
    return(
        <header className='animate__animated animate__fadeInDown animate__delay-1s'>
          <nav>
            <ul className="h-list">
                <li className='hvr-grow'><a href="#"><img src="./assets/imagens/Logo.png" alt="Logo da Luandina" /></a></li>
                <li><a className="active hvr-underline-from-center" href="#">Home</a></li>
                <li><a href="#" className='hvr-underline-from-center'>Lojas</a></li>
                <li><a href="#" className='hvr-underline-from-center'>Produção</a></li>
                <li><a href="#" className='hvr-underline-from-center'>Sobre</a></li>
            </ul>
          </nav>
          <div className="search">
              <input className="search-btn" type="search" placeholder="Pesquisar"/>
              <i className="bi bi-search search-icon"></i>
          </div>
        </header>
    )
}