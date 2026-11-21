let course = "JavaScript";

function showCourse() {
  let topic = "Functions";
  console.log("Global inside function:", course);
  console.log("Local inside function:", topic);
}

showCourse();
console.log("Local outside function:", typeof topic);

function shadowCourse() {
  let course = "Local course";
  console.log("Shadowed:", course);
}

shadowCourse();
console.log("Global is unchanged:", course);
