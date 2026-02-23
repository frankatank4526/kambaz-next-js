export function add(a: number, b: number): number      { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export function multiply(a: number, b: number): number { return a * b; }
export function divide(a: number, b: number): number   { return a / b; }
const Math = {
  add,
  subtract,
  multiply,
  divide,
};
/*
Block-scoped funcs can be accessed if exported
var test_func_scope = 1;
let test_block_scope = 2;
export {test_func_scope, test_block_scope};  
*/
export default Math;