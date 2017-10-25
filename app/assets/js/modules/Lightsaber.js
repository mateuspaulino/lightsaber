export class Lightsaber {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._on = false;
        this._elem = $('.lightsaber');
        this._elemimg = $('.lightsaber img');
        this._pathOn = "./img/lightsaber-on.png";
        this._pathOff = "./img/lightsaber.png";
    }
    setState(state) {
        this._on = state;
    }
    get state(){
        return this._on;
    } 
      
    get elem(){
        return this._elem;
    } 
    get elemimg(){
        return this._elemimg;
    } 
    get pathOn(){
        return this._pathOn;
    } 
    get pathOff(){
        return this._pathOff;
    }    
}