var obj = {
    name : "Default",
    greet : function () {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();//calling with the default values

obj.greet.call({ name : "Nitin Chaurasia" });//Passing an object
obj.greet.apply({ name : "Nitin Chaurasia" }); // Powerful for borrowing methods!!