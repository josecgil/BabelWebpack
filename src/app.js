import {sum as add, mult} from "./Math/basic"
import * as AdvMath from "./Math/advanced"

console.log("sum:"+add(2,3));
console.log("mult:"+mult(2,3));

console.log("cos:"+AdvMath.cos(1));
console.log("sin:"+AdvMath.sin(1));

export {AdvMath, add, mult}