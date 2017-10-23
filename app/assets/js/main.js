import { Lightsaber } from './modulos/Lightsaber.js';
import { Audio } from './modulos/Audio.js';

let $ = document.querySelector.bind(document);

let lightSaber = new Lightsaber();
let lightSaberElem = lightSaber.elem;

let audio = new Audio();

lightSaberElem.addEventListener('click', function(){
    if(lightSaber.state){
        lightSaber.elemimg.src = lightSaber.pathOff;
        lightSaber.setState(false);
        audio.off.play();
    }else{
        lightSaber.elemimg.src = lightSaber.pathOn;
        lightSaber.setState(true);        
        audio.on.play();
    }
});

let logMovimento = $('header h1');
logMovimento.innerHTML = "parado";

if(window.DeviceOrientationEvent){
    let sinal = 0;
    window.addEventListener('deviceorientation',function(event){ 
        let movementGamma = event.gamma;
        console.log(movementGamma);
        if(lightSaber.state){
            if(movementGamma>25){
                logMovimento.innerHTML = "direita";
                audio.right.play();
                // playAudio("right");
            }else if(movementGamma<-25){
                audio.left.play();
                logMovimento.innerHTML = "esquerda";
                // playAudio("left");
            }else{
                logMovimento.innerHTML = "parado";
            }
        }
    })
}

let previousDirection = ""

const playAudio = (direction) => {
    
    if(direction !== previousDirection){
        switch(direction){
            case "right":
                audio.right.play();
                break;
            case "left":
                audio.left.play();
                break;
            default:
                lightSaber.setState(false);
                audio.off.play();
        }
        previousDirection = direction;
    }

}

// const clickLightsaber = (lightSaber) => {
//     console.log(lightSaber);
// }

// lightSaber.elemimg.src = "./img/lightsaber-on.png";

// console.log(lightSaber.elemimg);

