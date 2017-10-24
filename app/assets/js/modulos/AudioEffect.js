export class AudioEffect {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._player = $('.audio#player');
        this._on = $('.audio#on');
        this._off = $('.audio#off');
        this._right = $('.audio#right');
        this._left = $('.audio#left');
    }
    get player(){
        return this._player;
    }
    get on(){
        return this._on;
    }
    get off(){
        return this._off;
    }  
    get right(){
        return this._right;
    }  
    get left(){
        return this._left;
    }      
}
