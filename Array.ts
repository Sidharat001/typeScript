// Arrays

// String Array literal
let fruits: string[] = ["apple", "banana", "orange"]; // Declaring a string array using array literal syntax

// ReadOnly array literal
const readOnlyArray: readonly number[] = [1, 2, 3, 4, 5]; // Declaring a readonly array
// Attempting to modify the readonly array
//readOnlyArray.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'

// Number array literals
const age:number [] = [1, 2, 3, 4, 5, 6];
//age.push("Hello"); // Error: String is not allow assgin in type 'number[]'


// Type Inference
type DataDto = [String, Number, Boolean, Object]; // Type inference automatically generated type inference
let employee: DataDto = ["Suraj", 23, true, {}]

// Mixed Type Arrays
let mixed: (string | number)[] = ["Suraj", "kumar",  23, 40]; // we can assgin only string and number types
mixed.forEach(x => {
    if(typeof x === "string"){
        console.log(x.toLocaleLowerCase() + " is String");
    }else{
        console.log(x.toFixed(2) + " is Number");
    }
})
