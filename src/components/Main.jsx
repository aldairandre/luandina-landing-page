import './style.css'

export default function Main(){
    return(
        <main>
           <div className="container-bg">
               <div className="left"></div>
               <div className="right"></div>
           </div>
           <h1 className="ltext">
               <span className="luand-txt">LUAN</span><span className="dina">DINA</span></h1>
           <div className="container-info">
               <div className="txt-info">
                   <h2>Tem uma, tem tudo</h2>
                   <p>Cerveja angolana reconhecida internacionamente.<br/>Detentora de prémios por ser saborosa e trazer a alegria a quem consome</p>
                   <button className="quero-btn">Quero uma</button>
               </div>
           </div>
           <div className="luandina-lata-container">
               <img src="../assets/imagens/luandina.png" alt="lata da luandina" className="luandina-lata"/>
               <img src="../assets/imagens/graphic.png" alt="graphic" className="graphic"/>
           </div>
           <div className="more">
               <p className="more-txt">Ver mais</p>
               <img src="../assets/icones/Repetição de grade 1.png" alt=""/>
           </div>
           <nav className="follow">
               <ul>
                   <li>Siga-nos</li>
                   <li><a href="#"><img src="../assets/social media/facebook.png" alt="facebook"/></a></li>
                   <li><a href="#"><img src="../assets/social media/instagram.png" alt="instagram"/></a></li>
                   <li><a href="#"><img src="../assets/social media/twitter.png" alt="twitter"/></a></li>
               </ul>
           </nav>
       </main>
    )
}