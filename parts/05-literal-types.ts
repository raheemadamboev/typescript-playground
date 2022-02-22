const POPERS = ["Justin Bieber", "Dua Lipa", "Zayn Malick"];
const RAPPERS = ["Eminem", "Tupac", "Nas"];

function singer(type: "pop" | "rap") {
  if(type == "pop") {
    return POPERS[Math.floor(Math.random() * POPERS.length)];
  } else {
    return RAPPERS[Math.floor(Math.random() * RAPPERS.length)];
  }
}

console.log(singer("rap"));
console.log(singer("pop"));