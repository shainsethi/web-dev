let color = "yellow";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

let day = 6;

switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}

let value = "1";

switch (value) {
  case 1:
    console.log("Matched number 1");
    break;
  default:
    console.log("switch uses strict comparison");
}
