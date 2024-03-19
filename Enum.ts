/**
 * TypeScript Enums
 * @enumerate An enum is a special "class" that represents a group of constants (unchangeable variables).
 * 
 */

// Numeric Enums - Fully Initialized
enum HttpStatusCode {
    Ok = 200,
    Internal_Server_Error = 500,
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(HttpStatusCode.Ok);

// Numeric Enums Defualt Initial Value
enum Direction {
    Up, // 0
    Down, // 1 
    Left, // 2
    Right // 3
}
console.log(Direction.Right);

// Numeric Enums User Define Initial Value
enum CardinalDirections {
    North = 6,
    East, // 7
    South, // 8 like this
    West // 9
}

console.log(CardinalDirections.North);


// String Enum
enum DepartMent {
    IT = "IT",
    DigitalMarketing = "DigitalMarketing",
    Developer = "Developer",
    Tester = "Tester"
}

console.log(DepartMent.Tester);

// Heterogeneous Enums :- Combine String and Numric Enums Types 
enum ErrorCode {
    ErrorMessage = "Not Found",
    ErrorStatusCode = 404
}

console.log(ErrorCode.ErrorStatusCode)

