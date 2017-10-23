export class Lightsaber {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._on = false;
        this._elem = $('.lightsaber');
        this._elemimg = $('.lightsaber img');
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
}

// export { Lightsaber as default}