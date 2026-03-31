'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var fun = function (nums, target) {

    // SET LEFT AND RIGHT INDEX VALUES
    let leftIndex = 0;
    let middleIndex;
    let rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {

        // DEFINE MIDDLE
        middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

        // CHECK IF MIDDLE IS TARGET
        if (nums[middleIndex] === target) return middleIndex;

        // CHECK IF THE LEFT SECTION IS ORDERED
        if (nums[leftIndex] <= nums[middleIndex]) {

            // CHECK IF IS NOT ON LEFT SECTION
            if (nums[leftIndex] > target || nums[middleIndex] < target) {
                // MOVE TO THE RIGHT
                leftIndex = middleIndex + 1;
            } else {
                // CONTINUE ON LEFT SECTION
                rightIndex = middleIndex - 1;
            }
        } else {

            if (nums[leftIndex] < target || nums[middleIndex] > target) {

                rightIndex = middleIndex - 1;

            } else {

                leftIndex = middleIndex + 1;

            }

        }
    }

    return -1;
};


(function () {

    const test1 = {
        nums: [1609466400, 1609470000, 1609473600, 1609459200, 1609462800],
        target: 1609459200,
        expected: 3
    }

    if (fun(test1.nums, test1.target) === test1.expected) {
        console.log('test passed!');
    } else {
        console.log('test failed!');
    }

})()