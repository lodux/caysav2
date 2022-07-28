import './chiSiamo.styles.scss'

const frasi = [
  `Siamo un’utility giovanile, flessibile, innovativa e impegnata a garantire ai nostri collaboratori un modello di sviluppo sostenibile che non lascia indietro nessuno.
  Siamo uno dei principali partner commerciali italia di Enel Global.
  Le nostre offerte spaziano da soluzioni per consumi domestici e commerciali, tecnologie intelligenti per permettere ai nostri clienti di vivere la trasformazione energetica in modo più semplice, servizi di e-mobility e servizi smart per la connessione internet.`
]



const ChisiamoPage = () => (
  <div className='chi-siamo-page'>
    <span className='titolo'>
      CHI SIAMO
    </span>
    <div className='citazione-container'>
      <span className='virgolette'>❝</span>
      {
        frasi.map((frase, i) => (
          <span 
            key={i}
            className={`
              citazione
              ${ frase === frasi[frasi.length] ? 'ultima' : '' }
            `}
          >
            { frase }
          </span>
        ))
      } 
      <span className='virgolette end'>❞</span>
    </div>
  </div>
)  

export default ChisiamoPage