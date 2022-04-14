import './style.css'
export default function Header(){
    return(
        <header>
          <nav>
            <ul className="h-list">
                <li><a href="#"><img src="./assets/imagens/Logo.png" alt="Logo da Luandina"/></a></li>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Lojas</a></li>
                <li><a href="#">Produção</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
          </nav>
          <div className="search">
              <input className="search-btn" type="search" placeholder="Pesquisar"/>
              <i class="bi bi-search search-icon"></i>
          </div>
        </header>
    )
}