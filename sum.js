function getSum(numberArr, target) {
    const numMap = new Map();

    for (let i = 0; i < numberArr.length; i++) {
        const complement = target - numberArr[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(numberArr[i], i);
    }

    return [];
}

// Test cases
console.log(getSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(getSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(getSum([3, 3], 6));          // Output: [0, 1]
console.log(getSum([5, 8, 9, 0], 14));   // Output: [1, 2]
console.log(getSum([0, 1, 2, 3, 10], 10));// Output: [0, 4]
