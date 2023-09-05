import React from 'react'

interface props{
  name: string;
  age: number;
  address: string;
  dob:Date;
}



  export default class Practice extends React.Component<props, {}> {
    constructor (props:any){
      super(props);
      console.log("-props--",props)
    }
  
  render () {
    enum CardinalDirections {
      search,
      edit,
      delete
    } 
 let currentDirection = CardinalDirections.delete;
 console.log(currentDirection);

 let firstName: string = "Dylan"; // type string

console.log(firstName);

let firstNames: string = "Dylan"; // type string

firstNames = "33"; // attempts to re-assign the value to a different type

console.log(firstNames);
    

const names :string[]=["seema"]
names.push ("Hema");
names.push ("77");
console.log(names);

const names1 : readonly string[]=["seema"]
console.log(names1)

const numbers=[1,2,3,4,5];
numbers.push (5);
numbers.push (6);
console.log (numbers);
let n:number=numbers[4]
console.log(n)

let ourTuple:[number,boolean,string];
ourTuple=[55,true,"My name is Alka"];
console.log(ourTuple);
ourTuple.push ("Something new and wrong")
console.log(ourTuple);

const ourReadonlyTuple: readonly [number, boolean, string] = [33, true, 'The Real Coding God'];
console.log(ourReadonlyTuple);

const car : {type:string, model:string,year:number}={
  type:"toyota",
  model:"Corolla",
  year:2009
};
console.log(car);


const cars:{type:string,mileage?:number}={
  type:"toyota"
};
cars.mileage=2000;
console.log(cars);

interface Rectangle{
  height:number,
  width:number,
};
const rectangle:Rectangle={
  height:39,
  width:44,
};
console.log(rectangle);
interface ColoredRectangle extends Rectangle {
  color:string
};
const coloredRectangle:ColoredRectangle={
  height:39,
  width:44,
  color:"Blue"
};
console.log(coloredRectangle)


type CarYear= number;
type CarType= string;
type CarModel=string;
type Car={
  year:CarYear,
  type:CarType,
  model:CarModel
};
const carYear:number=2005
const carType:string="Toyota"
const carModel:string="Corolla"
const car1:Car ={
year:carYear,
type:carType,
model:carModel
};
console.log(car1);


function printStatusCode(code: string | number){
  console.log(`My status code is ${code}.`)
  return code;
};
printStatusCode(408);
printStatusCode("486");


function getTime() : number{
  return new Date ().getTime();
};
console.log(getTime());

function printHello(): void{
  console.log(`hello`);
};
printHello();

function multiply ( a:number,b:number){
  return a*b;
};
console.log(multiply(4,5));

function add (a:number,b:number,c:number){
  return a + b + (c || 0);
};
console.log(add(5,6,7));


function pow (value:number, exponent:number=10){
  return value**exponent
};
console.log(pow(20));


function divide (dividend:number,divisor:number){
  return dividend / divisor
};
console.log(divide(100,10));

function add1( a:number,b:number, ...rest:number[]){
  return a+b+rest.reduce((p,c) => p+c ,0);
};
console.log(add1(10,10,10,10,10,10,10,10,10));

function Negate (value:number){
  return value * -1
};
console.log(Negate(7));

let x : unknown= "Hello"
console.log ((x as string).length);



  return (
  <div>
    <div>
      {/* {name},{age},{address},{dob} */}
      
      <h1>User Component </h1>
        Hello, <b>{this.props.name}</b>
        <br/>
        You are <b>{this.props.age} years old</b>
        <br/>
        You live at: <b>{this.props.address}</b>
        <br/>
        You were born: <b>{this.props.dob.toDateString()}</b>
    
    </div>
    <h1>{currentDirection}</h1>
    <h1>{firstName}</h1>
    <h1>{firstNames}</h1>
    <h1>{names}</h1>
    <h1>{names1}</h1>
    <h1>{numbers},{n}</h1>
    <h1>{ourTuple}</h1>
    <h1>{ourReadonlyTuple}</h1>
    <h1>{car.model}</h1>

    <h1>{cars.type}</h1>
    <h1>{rectangle.height}</h1>
    <h1>{coloredRectangle.color}</h1>
    <h1>{car1.year}</h1>
    <h1>{ printStatusCode(98987676)}</h1>
    <h1>{getTime()}</h1>
    <h1>{multiply(4,5)}</h1>
    <h1>{add(5,6,7)}</h1>
    <h1>{pow(20)}</h1>
    <h1>{divide(100,10)}</h1>
    <h1>{add1(10,10,10,10,10,10,10,10,10)}</h1>
    <h1>{Negate(7)}</h1>
    <h1>{(x as string).length}</h1>
    </div>

  );
};
}
