type Sport = "football"  | "basketball"
type Achievement = number | string

function magic(sport: Sport, achievement: Achievement) {
  if(sport === "football") {
    if(typeof achievement === "number") {
      return `Ronaldo scored ${achievement} goals`;
    } else {
      return `Ronaldo achieved ${achievement}`;
    }
  } else {
    if(typeof achievement === "number") {
      return `Lebron scored ${achievement}`;
    } else {
      return `Lebron achieved ${achievement}`;
    }
  }
}

console.log(magic("football", 891))
console.log(magic("football", "Golden Ball"))
console.log(magic("basketball", 50))
console.log(magic("basketball", "Best Player Award"))