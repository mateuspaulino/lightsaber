import { Lightsaber } from './modulos/Lightsaber.js';
import { AudioEffect } from './modulos/AudioEffect.js';

let $ = document.querySelector.bind(document);

let lightSaber = new Lightsaber();
let lightSaberElem = lightSaber.elem;

let audio = new AudioEffect();

let createdPlayerRight = null;
let createdPlayerLeft = null;

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
    
    //teste
    createdPlayerRight = new Audio('../audio/right.mp3');
    createdPlayerRight.muted = true;

    createdPlayerLeft = new Audio('../audio/left.mp3');
    createdPlayerLeft.muted = true;

    createdPlayerRight.play();
    createdPlayerRight.play();

    createdPlayerLeft.muted = false;
    createdPlayerRight.muted = false;

    // lightSaber.setState(true);

    // audio.player.src = '../audio/on.mp3';
    // audio.player.play();

});



let logMovimento = $('header h1');
logMovimento.innerHTML = "parado";

if(window.DeviceOrientationEvent){
    let sinal = 0;
    window.addEventListener('deviceorientation',function(event){ 
        let movementGamma = event.gamma;
        // console.log(movementGamma);
        if(lightSaber.state){
            if(movementGamma>25){
                logMovimento.innerHTML = "direita";

                // audio.player.src = '../audio/right.mp3';
                // audio.player.play();

                createdPlayerRight.play();

                // audio.right.play();
                // playAudio("right");
            }else if(movementGamma<-25){
                // audio.left.play();
                logMovimento.innerHTML = "esquerda";

                createdPlayerLeft.play();

                // audio.player.src = '../audio/left.mp3';
                // audio.player.play();
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

