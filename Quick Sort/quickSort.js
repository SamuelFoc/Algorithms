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
// sort: 97.127ms
// Final Memory: 18.06 MB
// Memory Used for Sorting: 13.22 MB
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, and concatenate results
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//* -----------------------------------------------------------------------

// Create an unsorted array with 100,000 elements
const arr = createUnsortedArray(100000, 0, 150000);

// Measure initial memory usage
const initialMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
console.log(`Initial Memory: ${initialMemory.toFixed(2)} MB`);

// Start measuring time
console.time("sort");

// Sort the array
const sortedArray = quickSort(arr);

// End measuring time
console.timeEnd("sort"); // This will log the total sorting time

// Measure final memory usage
const finalMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
console.log(`Final Memory: ${finalMemory.toFixed(2)} MB`);

// Display memory usage after sorting
const memoryUsed = finalMemory - initialMemory;
console.log(`Memory Used for Sorting: ${memoryUsed.toFixed(2)} MB`);

// Optionally, print the first 10 sorted elements to verify sorting
console.log(`First 10 sorted elements: ${sortedArray.slice(0, 10)}`);
