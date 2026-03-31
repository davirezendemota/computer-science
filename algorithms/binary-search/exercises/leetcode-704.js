'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // DEFINE LEFT AND RIGTH 
    // LEFT = 0
    // RIGHT = LAST INDEX OF ARRAY
    let leftIndex = 0;
    let middleIndex;
    let rightIndex = nums.length - 1;

    // LOOP UNTIL LOOKUP COLLAPSES
    while (leftIndex <= rightIndex){

        // GET MIDDLE INDEX
        middleIndex = leftIndex + Math.floor((rightIndex - leftIndex)/ 2);

        // IF MIDDLE INDEX EQUALS TARGET, RETURN ITS INDEX
        if (nums[middleIndex] === target) return middleIndex;

        // IF MIDDLE VALUE IS GREATTER THAN TARGET, CUT OF RIGHT
        if (nums[middleIndex] > target){
            // REPLACE RIGHT INDEX POSITION
            rightIndex = middleIndex - 1;
        } else {
            // REPLACE LEFT INDEX POSITION
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
};


(function () {

    const array = [-1,0,3,5,9,12];

    const target = 9;

    const expected = 4;

    if(search(array, target) === expected){
        console.log('test passed!');
    } else {
        console.log('test not failed!');
    }

})()