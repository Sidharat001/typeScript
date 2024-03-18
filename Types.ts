// Simple Types
/**
 * @boolean true or false values
 * @string text values like "TypeScript Rocks"
 * @number whole numbers and floating point values
 * @bigint whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
 * @symbol are used to create a globally unique identifier
 */


// Explicit types 
let isDone: boolean = true; // store true or false
let message: string = "TypeScript Rocks";   // store any string only
let count: number = 42; // store any int or float
let pi: number = 3.14;  // store any int or float
let bigNumber: bigint = 9007199254740991n;  // big int store for biginterger
const key1 = Symbol();
const key2 = Symbol("description");


// Special Types 
let nullableValue: null = null; // can't assign any value
let undefinedValue: undefined = undefined; // store only undefine value
function logMessage(): void { console.log("Hello, TypeScript!"); } // void not return any types of value
let userInput: unknown; // unknown define data types at run time when user not no about incoming datatypes
let someValue: any = 5; // skip the type checking

