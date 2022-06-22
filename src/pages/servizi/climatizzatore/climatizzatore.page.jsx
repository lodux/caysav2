import './climatizzatore.styles.scss'

const prodotti = [
    {
        imgLink: 'https://www.enelxstore.com/content/dam/enel-x-store-it/prodotti_catalogo/clima/lg-libero-s/LG-Libero-S-inverter-monosplit-9000-btu-h-enelxstore.png.web.291.180.png',
        titolo: 'LG',
        desc: 'LG Libero S 9.500 btu/h',
        prezzo: '$69',
        sottotitolo: 'Installazione e IVA incluse'
    },
    {
        imgLink: 'https://www.enelxstore.com/content/dam/enel-x-store-it/prodotti_catalogo/clima/lg-libero-s/LG-Libero-S-inverter-monosplit-9000-btu-h-enelxstore.png.web.291.180.png',
        titolo: 'LG',
        desc: 'aaaaa',
        prezzo: '$69',
        sottotitolo: 'aaaaaaaaaaaaaaaaa'
    }    
]

const Climatizzatore = () => {

    return (
        <div className='pagina-dei-servizi'>
            <section className='servizio'>
                <div className='sticky-div'>
                    <div className='componente-fisso'>
                        <div className='testo-con-barra'>
                            <span>Climatizzatori</span>
                            <div 
                                className='barra' 
                                style={{
                                    background: `linear-gradient(
                                                        to right,
                                                        rgba(8, 177, 215, 0.2) ${0}%,
                                                        transparent  0
                                                    )`
                                }}
                            />
                        </div>
                        <div className='icone'>
                            <img 
                                src='https://cdn.onlinewebfonts.com/svg/img_503325.png'
                                alt='icona'
                            />
                            <img 
                                src='https://cdn.onlinewebfonts.com/svg/img_503325.png'
                                alt='icona'
                            />
                            <img 
                                src='https://cdn.onlinewebfonts.com/svg/img_503325.png'
                                alt='icona'
                            />
                            <img 
                                src='https://cdn.onlinewebfonts.com/svg/img_503325.png'
                                alt='icona'
                            />                                                            
                        </div>
                        <span className='desc'>Scegli tra i migliori climatizzatori fissi ideali per ogni ambiente della casa. 
                        I climatizzatori mono split e i climatizzatori multi split selezionati per te garantiscono il massimo dell’efficienza e del comfort con bassi consumi. 
                        Con la formula Enel X Relax Clima l`installazione è sempre inclusa nel prezzo.</span>
                        <a href='#prova'>TUTTE LE OFFERTE CLIMATIZZATORI</a>
                    </div>
                </div>
                <div className='wrapper'>
                {
                    prodotti.map(({ imgLink, desc, prezzo, sottotitolo, titolo }, i) => (
                        <div className='prodotto'>
                            <div className='immagine-wrapper'>
                                <img 
                                    src={imgLink}
                                    alt='climatizzatore'
                                />
                            </div>
                            <span className='titolo'>{titolo}</span>
                            <span className='desc'>{desc}</span>                            
                            <span className='sottotitolo'>{sottotitolo}</span>
                            <span className='prezzo'>{prezzo}</span>
                        </div>
                    ))
                }                                            
                </div>
            </section>          
        </div>
    )
}

export default Climatizzatore