import './App.css'
import './App-Hover.css'

export default function Main(){
    return(
        <main className='animate__animated animate__fadeIn animate__delay-0.9s'>
           <div className="container-bg">
               <div className="left"></div>
               <div className="right"></div>
           </div>
           <h1 className="ltext">
               <span className="luand-txt">LUAN</span><span className="dina">DINA</span></h1>
           <div className="container-info animate__animated animate__fadeInLeftBig animate__delay-1s">
               <div className="txt-info">
                   <h2>Tem uma, tem tudo</h2>
                   <p className='hvr-grow'>Cerveja angolana reconhecida internacionamente.<br/>Detentora de prémios por ser saborosa e trazer a alegria a quem consome</p>
                   <button className="quero-btn animate__animated animate__fadeInLeftBig animate__delay-1s hvr-bubble-bottom">Quero uma</button>
               </div>
           </div>
           <div className="luandina-lata-container">
               <img src="./assets/imagens/luandina.png" alt="lata da luandina" className="luandina-lata animate__animated animate__fadeInUpBig animate__delay-2s"/>
               <img src="./assets/imagens/graphic.png" alt="graphic" className="graphic animate__animated animate__fadeInUpBig animate__delay-1s"/>
           </div>
           <div className="more animate__animated animate__fadeInRightBig animate__delay-1s ">
               <p className="more-txt ">Ver mais</p>
               <i className="bi bi-arrow-right-circle hvr-grow"></i>
           </div>
           <nav className="follow animate__animated animate__fadeInRightBig animate__delay-1s">
               <ul>
                   <li>Siga-nos</li>
                   <li><a href="#"><i className="bi bi-facebook hvr-grow"></i></a></li>
                   <li><a href="#"><i className="bi bi-instagram hvr-grow"></i></a></li>
                   <li><a href="#" className='hvr-grow'><i className="bi bi-github "></i></a></li>
               </ul>
           </nav>
       </main>
    )
}