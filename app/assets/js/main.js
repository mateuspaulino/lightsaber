import { Lightsaber } from './modules/Lightsaber.js';
import { AudioEffect } from './modules/AudioEffect.js';

let $ = document.querySelector.bind(document);

let lightSaber = new Lightsaber();
let lightSaberElem = lightSaber.elem;

let audio = new AudioEffect();

let createdPlayerRight = null;
let createdPlayerLeft = null;

let firstClick = true;

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
    
    //I had to create / play some audios dynamically on the first click, because on mobile, some browsers do not accept to trigger audio, so it's a way to turn it on
    if(firstClick){
        createdPlayerRight = new Audio('../audio/right.mp3');
        createdPlayerRight.muted = true;
    
        createdPlayerLeft = new Audio('../audio/left.mp3');
        createdPlayerLeft.muted = true;
    
        createdPlayerRight.play();
        createdPlayerRight.play();
    
        createdPlayerLeft.muted = false;
        createdPlayerRight.muted = false;

        firstClick = false;
    }

});

let logMovement = $('header h1');

if(window.DeviceOrientationEvent){
    let sinal = 0;
    window.addEventListener('deviceorientation',function(event){ 
        let movementGamma = event.gamma;
        // console.log(movementGamma);
        if(lightSaber.state){
            if(movementGamma>25){
                // logMovement.innerHTML = "direita";
                movement("right");
            }else if(movementGamma<-25){
                // logMovement.innerHTML = "esquerda";
                movement("left");
            }else{
                movement("stopped");
                // logMovement.innerHTML = "parado";
            }
        }
    });
}

let previousDirection = "";

const movement = (direction) => {
    
    if(direction !== previousDirection){
        switch(direction){
            case "on":
                lightSaber.setState(true);
                audio.on.play();
            break;
            case "off":
                lightSaber.setState(false);
                audio.off.play();
                logMovement.innerHTML = "desligado";
            break;
            case "right":
                createdPlayerRight.play();
                logMovement.innerHTML = "direita";
                break;
            case "left":
                createdPlayerLeft.play();
                logMovement.innerHTML = "esquerda";
                break;
            case "stopped":
                logMovement.innerHTML = "parado";
                break;
            default:
                lightSaber.setState(false);
                audio.off.play();
        }
        previousDirection = direction;
    }

};

