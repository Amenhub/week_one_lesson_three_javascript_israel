// LOOPS AND CONDITIONAL

// Creating an object with key-value pairs representing personal information
let person = {
    name: "Israel",
    age: 28,
    city: "Ilorin",
    occupation: "Engineer"
  };
  
  // Use a for...in loop to iterate over the object 
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  