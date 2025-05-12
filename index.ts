// VARIABLES (let, const, var)
// declation var_name = value;

// DATA TYPES: Type of value you put in a variable
// Primitive Data Types: String, Number, Boolean, Null, Undefined,
const SITE_NAME2: string | number = "Guess the Number";

const POOL_OF_NUMBERS2: (number | string)[] = [1, 2, "jOHN", 3, 4, 5, 6, 7, 8, 9, 10];

const MAX_ATTEMPTS2: number = 5;

let sound2: boolean = true; // true or false

let guess2: null | number = null; // undefined

// Non-Primitive Data Types: Object, Array, Function

// Array Type
var history2: string[] = [];


// Object/Record type
let player2: {
  name: string;
  age: number;
  city: string;
  isAdmin: boolean;
  isActive: boolean;
  isGuest: null | number;
} = {
    name: "John",
    age: 20,
    city: "New York",
    isAdmin: false,
    isActive: true,
    isGuest: null,
  };


// Function Type
const logThisToConsole2 = (): string => {
  console.log(this);
  return "Hell";
};
function getPlayerName2(): string {
  return player2.name;
}
// Function with argument Type
function turnSomethingToString(something: SomethingType): string {
  return `${something.a} and ${something.b}`
}


// interface can take objects
interface SomethingType {
  a: number,
  b: string
}

// type can take anything
type SomethingType2 = Array<string> | Array<number>


// ARRAYS TYPES
type TestArray1 = Array<string | number>
type TestArray2 = (string | number)[]
const card: TestArray1 = ["Jack", "Qween", "King", 1, 34, 23]

type TypeOfStringOrNumberOrNull = string | number | null

// OBJECTS TYPES (ALL ARE THE SAME OBJECT)
interface TestObject1 {
  name: string,
  age: number,
  gender: string | null
  cards: TestArray1 // Array<string | number>
}
type TestObject2 = Record<string, number | string | null | TestArray1> 
interface TestObject3 { 
  [key: string]: TypeOfStringOrNumberOrNull & TestArray1
}
type TestObject4 = {
name: string,
age: number,
gender: string | null
cards: TestArray1
}






