import './App.css'

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
          <div class="submit-line">
              <input type="text" placeholder='pesquisar uma aqui'/>
              <button class="submit-lente" type="submit">
                <i class="bi bi-search search-icon"></i>
              </button>
            </div>
        </header>
    )
}