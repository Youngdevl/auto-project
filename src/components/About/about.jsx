import React from 'react';
import './about.css';
import vid from '../img/FORD 1966 MUSTANG - classic car cinematic film converted.mp4'

const about = () => {
  return (
    <div class="flex" id='obi'>
    <div class="flex-1 w-64 ...">
    <video src={vid} muted autoPlay loop/>
    </div>
    <div class="flex-1 w-32 ...">
        <h1>Mustang History</h1>
        <p id='wit'>Ford marketed the original Mustang as a 1965 model, though Ford made Ford marketed the original Mustang as a 1965 model, though Ford made several production changes to cars built after August 1964, by which time Ford had already sold 120,000. Hobbyists refer to early Mustangs as "1964½" models, while post-August cars are "late" 1965s.construit par Ford depuis 1964. Fait unique pour la marque Ford, les Mustang arborent leur propre logotype de calandre — un mustang au galop — à la place de celui du constructeur. Tous modèles confondus, cette voiture atteint les dix millions ...</p>
    </div>
  </div>
  )
}

export default about
