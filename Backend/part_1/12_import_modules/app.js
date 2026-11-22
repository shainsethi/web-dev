import multiply, { PI, add as sum } from "./math.js";
import * as math from "./math.js";
import { basename } from "node:path";

console.log("Named import:", PI);
console.log("Renamed import:", sum(2, 3));
console.log("Default import:", multiply(2, 3));
console.log("Namespace import:", math.add(4, 5));
console.log("Built-in module:", basename("/lessons/app.js"));
console.log("require exists here:", typeof require !== "undefined");
