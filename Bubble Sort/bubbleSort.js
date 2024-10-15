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
// sort: 18.877s
// Final Memory: 5.49 MB
// Memory Used for Sorting: 0.64 MB
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false; // Reset swapped at the beginning of each iteration
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // Set swapped to true if a swap occurred
      }
    }
  } while (swapped); // Continue until no swaps are made
  return arr;
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
const sortedArray = bubbleSort(arr);

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
