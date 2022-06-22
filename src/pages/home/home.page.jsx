import { useEffect, useState, useRef } from 'react'

import './home.styles.scss'

const galleriaDiImmagini = [
    'https://i.imgur.com/Bvjfcjy.png',
    'https://i.imgur.com/b4mfMq9.jpeg',
    'https://cdn.wallpapersafari.com/22/23/E3vNtI.jpg',
    'https://wallpaperaccess.com/full/343619.jpg',
    'https://cdn.gobankingrates.com/wp-content/uploads/2019/05/Davao-City-in-the-Phillippines-shutterstock_504042466.jpg'
]

const delay = 6000

const HomePage = () => {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => timeoutRef.current ? clearTimeout(timeoutRef.current) : null

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () => 
                setIndex(prevIndex =>
                    prevIndex === galleriaDiImmagini.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )
      
        return () => {
            resetTimeout()
        }
    }, [index]) 

    return (
        <div className='homepage'> 
            <div 
                className='slide-container'
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {
                    galleriaDiImmagini.map((img, i) => (
                        <div 
                            key={i}
                            className='slide'
                            style={{
                                'background': `url(${img}) no-repeat center center fixed`
                            }}                            
                        >
                        </div>
                    ))
            }
            </div>
            <div className="punti-container">
                {galleriaDiImmagini.map((_, i) => (
                    <div
                        key={i}
                        className={`punto${index === i ? " active" : ""}`}
                        onClick={() => {
                            setIndex(i);
                        }}
                    >
                    </div>
                ))}
            </div>          
        </div>
    )
}

export default HomePage