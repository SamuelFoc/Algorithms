function createUnsortedArray(size, min, max) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    // Generate a random integer between min and max
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

//* IMPLEMENTATION --------------------------------------------------------
// Initial Memory: 6.04 MB
// search: 0.404ms
// Final Memory: 7.45 MB
// Memory Used for Search: 1.40 MB
function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid_idx = Math.floor(arr.length / 2);
  let mid = arr[mid_idx];

  if (mid === target) {
    return mid_idx;
  }

  if (target < mid) {
    return binarySearch(arr.slice(0, mid_idx), target);
  } else {
    return binarySearch(arr.slice(mid_idx + 1), target);
  }
}
//* IMPLEMENTATION --------------------------------------------------------

// Create and sort an unsorted array with 100,000 elements
const arr = createUnsortedArray(100000, 0, 150000);
arr.sort((a, b) => a - b); // Sort the array to use binary search

const target = arr[Math.floor(Math.random() * arr.length)]; // Select a random target from the sorted array

// Measure initial memory usage
const initialMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
console.log(`Initial Memory: ${initialMemory.toFixed(2)} MB`);

// Start measuring time
console.time("search");

// Perform the binary search
const index = binarySearch(arr, target);

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
