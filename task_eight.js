// LOOPS AND CONDITIONAL

// Defining the size of the multiplication table to 10
const size = 10;

// Generate the multiplication table using nested loops
for (let i = 1; i <= size; i++) {
  let row = ''; // Initialize an empty string to store the row of the table
  for (let j = 1; j <= size; j++) {
    // Calculate the product of i and j and format it to align the table
    row += (i * j).toString().padStart(4, ' ') + ' ';
  }
// Log the row to the console
  console.log(row); 
}
