const femaleStudents = ['Marge', 'Lisa', 'Maggie', 'Aunt Selma', 'Aunt Pattie'];
const maleStudents = ['Homer', 'Bart', 'Grandpa Simpson', 'Mr. Burns', 'Ned Flanders'];

const students = femaleStudents.concat(maleStudents);
students.sort();

console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);
console.log('\n');

let i = 0;
while (i < maleStudents.length) {
  console.log(maleStudents[i]);
  i++
}

console.log('\n');


for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

