const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
//const person = {
  name: "Raheem",
  age: 21,
  hobbies: ["Football", "Music"],
  role: [7, "CEO"]
};

console.log(`${person.name} ${person.age}`);

//person.role.push("i feel it coming");
//person.role[1] = 15;
//person.role = [15, "ronaldo", "messi"]

console.log(JSON.stringify(person.role));

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); !!! ERROR !!! type inference is working, map cant be used in string it can be used in array
}
