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
// sort: 883.649ms
// Final Memory: 18.24 MB
// Memory Used for Sorting: 13.40 MB
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
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
const sortedArray = mergeSort(arr);

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
