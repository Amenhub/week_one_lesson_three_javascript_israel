// LOOPS AND CONDITIONAL

// forEach()

let names = ["Israel", "Victor", "Ayinde", "Amenhub", "Jide"];

// - forEach() method
names.forEach(name => {
  console.log(name);
});

// map()

let nameLengths = names.map(name => name.length);

// Log the new array to the console
console.log(nameLengths);

// filter()

let longNames =names.filter(name=> name.length > 5)

// new array to the consolee
console.log (longNames)