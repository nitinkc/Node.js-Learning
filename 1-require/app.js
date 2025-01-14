// Bring the greet.js Module here
var fromFile = require('./greet');//taking greet.js File

var fromDir = require('./greeting');//taking greeting Folder's index.js


fromFile();
fromDir.english();
fromDir.spanish();
