import { useEffect, useState, useRef } from 'react'

import './home.styles.scss'

import img1 from './background-images/1.webp'
import img2 from './background-images/2.webp'
import img3 from './background-images/3.webp'
import img4 from './background-images/4.webp'
import img5 from './background-images/5.webp'

const galleriaDiImmagini = [
    img1,
    img2,
    img3,
    img4,
    img5
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