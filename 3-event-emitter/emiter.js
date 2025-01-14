function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    //if the property exists add otherwise keep it empty
    this.events[type] = this.events[type] || [];
    
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if(this.events[type]){
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter; 