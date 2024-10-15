function createUnsortedArray(size, min, max) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    // Generate a random integer between min and max
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

//* IMPLEMENTATION --------------------------------------------------------
// Initial Memory: 4.85 MB
// search: 0.448ms
// Final Memory: 5.49 MB
// Memory Used for Search: 0.64 MB
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the found element
    }
  }
  return -1; // Return -1 if the target is not found
}

//* -----------------------------------------------------------------------

// Create an unsorted array with 100,000 elements
const arr = createUnsortedArray(100000, 0, 150000);
const target = arr[Math.floor(Math.random() * arr.length)]; // Select a random target from the array

// Measure initial memory usage
const initialMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
console.log(`Initial Memory: ${initialMemory.toFixed(2)} MB`);

// Start measuring time
console.time("search");

// Perform the linear search
const index = linearSearch(arr, target);

// End measuring time
console.timeEnd("search"); // This will log the total search time

// Measure final memory usage
const finalMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
console.log(`Final Memory: ${finalMemory.toFixed(2)} MB`);

// Display memory usage after searching
const memoryUsed = finalMemory - initialMemory;
console.log(`Memory Used for Search: ${memoryUsed.toFixed(2)} MB`);

// Output the result of the search
if (index !== -1) {
  console.log(`Target ${target} found at index ${index}.`);
} else {
  console.log(`Target ${target} not found.`);
}
