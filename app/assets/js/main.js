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
        movement("off");
    }else{
        lightSaber.elemimg.src = lightSaber.pathOn;
        lightSaber.setState(true);        
        movement("on");
    }
    
    //I had to create / play some audios dynamically on the first click, because on mobile, some browsers do not accept to trigger audio, so it's a way to turn it on
    if(firstClick){
        createdPlayerRight = new Audio('./audio/right.mp3');
        createdPlayerRight.muted = true;
    
        createdPlayerLeft = new Audio('./audio/left.mp3');
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

        if(lightSaber.state){
            if(movementGamma>25){
                movement("right");
            }else if(movementGamma<-25){
                movement("left");
            }else{
                movement("stopped");
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
                logMovement.innerHTML = "on";
            break;
            case "off":
                lightSaber.setState(false);
                audio.off.play();
                logMovement.innerHTML = "off";
            break;
            case "right":
                createdPlayerRight.play();
                logMovement.innerHTML = "right";
                break;
            case "left":
                createdPlayerLeft.play();
                logMovement.innerHTML = "left";
                break;
            case "stopped":
                logMovement.innerHTML = "stopped";
                break;
            default:
                lightSaber.setState(false);
                audio.off.play();
        }
        previousDirection = direction;
    }

};

