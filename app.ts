const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Raheem",
  age: 21,
  hobbies: ["Football", "Music"]
};

console.log(`${person.name} ${person.age}`);


for(const hobby in person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); !!! ERROR !!! type inference is working, map cant be used in string it can be used in array
}