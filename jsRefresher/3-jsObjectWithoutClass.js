const student = {
    name: 'John Doe',
    branch: 'Computer Science',

    // Returns undefined
    greeting1: () => {
        console.log('Hello!! This is ' + this.name + ' from ' +  this.branch + ' department!');
    },

    // Explicit function : Returns variable values properly
    greeting2: function(){
        console.log('Hello!! This is ' + this.name + ' from ' +  this.branch + ' department!');
    },
    
    // Returns variable values properly
    greeting3() {
        console.log('Hello!! This is ' + this.name + ' from ' +  this.branch + ' department!');
    }
};

student.greeting1();
student.greeting2();
student.greeting3();