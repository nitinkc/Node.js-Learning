//var Emitter = require('./emiter');

var Emitter = require('events');//This also works
 var emtr = new Emitter();
 
 emtr.on('greet', function () {
     console.log("Event happening");
 });
 
 emtr.on('greet', function () {
     console.log("Another Event");
 })
 
 console.log('hello');
 emtr.emit('greet')