enum Role {
    ADMIN,
    CEO,
    EMPLOYEE,
  }
  
  const person : {
    name: string;
    age: number;
    role: Role;
  } = {
    name: "Raheem",
    age: 21,
    role: Role.CEO
  };
  
  console.log(person);