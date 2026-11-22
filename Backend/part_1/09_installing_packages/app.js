const ms = require("ms");

console.log('ms("2 days"):', ms("2 days"));
console.log('ms("1h"):', ms("1h"));
console.log("ms(60000):", ms(60000));
console.log('ms(60000, { long: true }):', ms(60000, { long: true }));
