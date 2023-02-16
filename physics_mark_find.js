let students_db_array = [
  {
    name: "Kishore",
    age: 19,
    stipend: 1000,
    marks: { maths: 50, physics: 79, chemistry: 80 },
  },
  {
    name: "Razzak",
    age: 18,
    stipend: 10000,
    marks: { maths: 80, physics: 75, chemistry: 70 },
  },
  {
    name: "Ajmal",
    age: 18,
    stipend: 10000,
    marks: { maths: 35, physics: 45, chemistry: 50 },
  },
  {
    name: "Aishwarya",
    age: 21,
    stipend: 10000,
    marks: { maths: 65, physics: 80, chemistry: 85 },
  },
];

const physics = students_db_array;

let oneMarks = physics[0]["marks"]["physics"];

// console.log(oneMarks);

for (let i = 1; i < physics.length; i++) {
  if (physics[i]["marks"]["physics"] > 70) {
    oneMarks = physics[i];
  }
}
console.log(oneMarks);
console.log(oneMarks.name);
