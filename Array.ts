/**
 * Array
 * @array is used to store homegenous value
 */

// String Array literal Example
let fruits: string[] = ["apple", "banana", "orange"]; // Declaring a string array using array literal syntax

// ReadOnly array literal Example
const readOnlyArray: readonly number[] = [1, 2, 3, 4, 5]; // Declaring a readonly array
// Attempting to modify the readonly array
//readOnlyArray.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'

// Number array literals Example
const age:number [] = [1, 2, 3, 4, 5, 6];
//age.push("Hello"); // Error: String is not allow assgin in type 'number[]'


// Type Inference Example
type DataDto = [String, Number, Boolean, Object]; // Type inference automatically generated type inference
let employee: DataDto = ["Suraj", 23, true, {}]

// Mixed Type Arrays Example
let mixed: (string | number)[] = ["Suraj", "kumar",  23, 40]; // we can assgin only string and number types
mixed.forEach(x => {
    if(typeof x === "string"){
        console.log(x.toUpperCase() + " is String");
    }else{
        console.log(x.toFixed(2) + " is Number");
    }
})


// Tuples Array 
/**
 * @tuples is a typed array with a pre-defined length and types for each index
 */

// Simple Tuple Example
let ArrayTuples: [String, Number, Boolean, Object, String[]];
ArrayTuples = ["Karthik", 23, true, {salary: 20, department: 'IT'}, ['Javascipt', 'Typescript', 'PHP', 'HTML']]

// Readonly Tuple Example
let Array2Tuples: readonly [String, Number, Boolean, Object, String[]] = ["Karthik", 23, true, {salary: 20, department: 'IT'}, ['Javascipt', 'Typescript', 'PHP', 'HTML']]
// Array2Tuples.push("Test")  Error :- Property 'push' does not exist on type 'readonly [String, Number, Boolean, Object, String[]]' 

// Named Tuples Example
type Employee = [name: string, age: number, department: string, skills: string[], extraInfo: {}];
let ex_employee: Employee = ["John", 23, 'IT', ["PHP", "Javascript", "Typescript", "Nestjs", "Asp.net"], { extra: "additional information" }];