class MyClass {
    constructor() {
        this._options = {};
    }
    
    setOption(key, value) {
        this._options[key] = value;
    }
    
    getOption(key) {
        return this._options[key];
    }
}

const myObject = new MyClass();
myObject.setOption('color', 'blue');
console.log(myObject.getOption('color')); // Output: 'blue'
