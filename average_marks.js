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

let array = students_db_array;

let onePersonAverage =
  array[0]["marks"]["physics"] + ["maths"] + ["chemistry"] / 3;

let count = 0;

for (let i = 1; i < array.length; i++) {
  if (
    onePersonAverage >
    array[i]["marks"]["physics"] + ["maths"] + ["chemistry"] / 3
  )
    count++;
}
console.log(count);
