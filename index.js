function hasTargetSum(array, target) {
  // Create a Set to store visited numbers
  const visited = new Set();

  // Iterate through the array
  for (let num of array) {
    // Calculate the difference between the target and the current number
    const difference = target - num;

    // If the difference exists in the visited set, then the target sum is found
    if (visited.has(difference)) {
      return true;
    }

    // Add the current number to the visited set
    visited.add(num);
  }

  // If no target sum is found, return false
  return false;
}

// Time complexity: O(n), where n is the number of elements in the array.

// Pseudocode:
/*
  1. Create an empty set called "visited" to store visited numbers.
  2. Iterate through each number in the array.
  3. Calculate the difference between the target and the current number.
  4. Check if the difference exists in the "visited" set. If yes, return true.
  5. If the difference doesn't exist, add the current number to the "visited" set.
  6. If the loop completes without finding a target sum, return false.
*/

// Written explanation:
/*
  The function iterates through the array once, performing constant-time operations (addition and set lookup) for each element. 
  The set lookup operation has an average time complexity of O(1). 
  Therefore, the overall time complexity of the function is O(n), where n is the number of elements in the array.
*/

// Custom tests
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
console.log("=>", hasTargetSum([4], 4));

module.exports = hasTargetSum;
