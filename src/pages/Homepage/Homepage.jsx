import React, { useState } from 'react'
import './Homepage.css'
import Navbar from '../../components/Navbar/Navbar';
import Contattaci from '../../components/contattaci/Contattaci';
import Buttoncontatta from '../../components/buttoncontatta/Buttoncontatta';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';


export default function Homepage() {
  //state per far apparire il contattaci dopo il click
    const [cont, setCont]=useState(false);
  return (
    <div className='homepage'>    
       Homepage
      
        {/* slide di immagini */}
        <div className="container">
           {console.log(cont)}
            <input type="radio" id="i1" name="images" checked />
            <input type="radio" id="i2" name="images" />
            <input type="radio" id="i3" name="images" />
            <input type="radio" id="i4" name="images" />
            <input type="radio" id="i5" name="images" />    
            
            {/* immagine 1 */}
            <div className="slide_img" id="one">
                {/* bottone contattaci davanti immagine */}
                <Buttoncontatta/>            
                    <img src="http://www.bhmpics.com/wallpapers/little_pony_art-800x480.jpg" />
                    
                        <label className="prev" for="i5"><span>&#x2039;</span></label>
                        <label className="next" for="i2"><span>&#x203a;</span></label>       
            </div>
            {/* immagine 2 */}
            <div className="slide_img" id="two">
            <Buttoncontatta/> 
                    <img src="https://preview.ibb.co/e5OShF/cropped_800_480_111290.jpg " />
                    
                        <label className="prev" for="i1"><span>&#x2039;</span></label>
                        <label className="next" for="i3"><span>&#x203a;</span></label>
                
            </div>
            {/* immagine 3 */}     
            <div className="slide_img" id="three">
            <Buttoncontatta/> 
                    <img src="http://wallpaperswide.com/download/up_house-wallpaper-1280x800.jpg" />    
                    
                        <label className="prev" for="i2"><span>&#x2039;</span></label>
                        <label className="next" for="i4"><span>&#x203a;</span></label>
            </div>
            {/* immagine 4 */}
            <div className="slide_img" id="four">
            <Buttoncontatta/> 
                    <img src="http://wallpaperswide.com/download/big_hero_6_baymax-wallpaper-1152x720.jpg" />    
                    
                        <label className="prev" for="i3"><span>&#x2039;</span></label>
                        <label className="next" for="i5"><span>&#x203a;</span></label>
            </div>
            {/* immagine 5 */}
            <div className="slide_img" id="five">
            <Buttoncontatta/> 
                    <img src="https://cdn.gobankingrates.com/wp-content/uploads/2019/05/Davao-City-in-the-Phillippines-shutterstock_504042466.jpg"/>    
                      
                        <label className="next" for="i1"><span>&#x203a;</span></label>
            </div>
            <div id="nav_slide">
                <label for="i1" className="dots" id="dot1"></label>
                <label for="i2" className="dots" id="dot2"></label>
                <label for="i3" className="dots" id="dot3"></label>
                <label for="i4" className="dots" id="dot4"></label>
                <label for="i5" className="dots" id="dot5"></label>
            </div>  
           
        </div> 
        <Footer/>
    </div>
  )
}
