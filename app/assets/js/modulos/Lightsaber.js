export class Lightsaber {
    constructor(){
        this._on = false;
    }
    get state(){
        return this._on;
    }    
}

// export { Lightsaber as default}