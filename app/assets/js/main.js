import { Lightsaber } from './modulos/Lightsaber.js';

let $ = document.querySelector.bind(document);

let lightSaber = new Lightsaber();
let lightSaberElem = lightSaber.elem;

lightSaberElem.addEventListener('click', function(lightSaber){
    console.log(lightSaber.state);
});

const clickLightsaber = (lightSaber) => {
    console.log(lightSaber);
}

// lightSaber.elemimg.src = "./img/lightsaber-on.png";

// console.log(lightSaber.elemimg);

