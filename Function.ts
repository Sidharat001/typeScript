// TypeScript Functions

/**
 * @function The type of the value returned by the function can be explicitly defined
 * @syntax  
 * function function_name (para: type, para: type) : return type { 
 *      // Statement Code
 *  }
 */

function sum(a: number, b: number): string {
    return `${a} + ${b} = ${a+b}`;
}


console.log(sum(20, 30));

