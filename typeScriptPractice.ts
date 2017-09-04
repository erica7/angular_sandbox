// Given the code below, re-write it using all TypeScript features you have learned

myNum = 5;
myString = "Hello Universe";
myArr = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable = "Hey";
anythingVariable = 25;
arrayOne = [true, false, true, true];
arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}


// Typescript
// https://www.typescriptlang.org/play/index.html

var myNum: number = 5;
var myString: string = "Hello Universe";
var myArray: number[] = [1, 2, 3, 4];
var myObj: object = { name: "Echo" };
var anythingVariable: any = "hey";
anythingVariable = 4;
var arrayOne: boolean[] = [true, false, true, false];
var arrayTwo: any[] = [1, 'abc', true, 2];
class MyNode {
    val: number;
    _priv: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}
var myNodeInstance: MyNode = new MyNode(1);
function myFunction(): void{
    console.log("helloooo");
    return;
}
function sendingErrors(): never{
    throw new Error('Error message');
}
