import React from 'react'
import './mid.css'
import videoBg from '../img/FORD 1966 MUSTANG - classic car cinematic film converted.mp4';
import gb from '../img/Car Website – 1@2x.png'
import flat from '../image/428634_4k-ultra-hd-classic-car-wallpapers-hd-desktop-backgrounds-3840x2160_3840x2160_h-removebg-preview.png'

const Main = () => {
  return (
    <div class="flex" id='lm'>
    <div class="flex-1 w-64 ..." id='ert'>
      <h1>FORD MUSTANG<br/>
    Fastback 5.0L v8</h1>
      {/* <h3>Free Shipping On Delivery</h3> */}
      <p id='wit'>→Version
GT Fastback 5.0L v8
<br/>
→Mileage (ARAI)
7.9 kmpl
<br/>
→Transmission
Automatic
<br/>→Seating Capacity
4 Seater<br/>
→Engine
4951 cc</p>
       <div id='gn'>
       </div>
    </div>
    <div class="flex-1 w-32 ..." id='vit'> 
   <img src={flat} width={3300}/>
    </div>
  </div>
  
  )
}

export default Main

