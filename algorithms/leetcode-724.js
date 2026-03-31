// https://www.youtube.com/watch?v=lIliBTgIGrQ

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    for (let middleIndex = 0; middleIndex < nums.length; middleIndex++) {

        let leftSum = 0;
        let rightSum = 0;

        // SUM LEFT SIDE
        for (let i = leftIndex; i < middleIndex; i++) {
            leftSum += nums[i];
        }

        // SUM RIGHT SIDE
        for (let i = rightIndex; i > middleIndex; i--) {
            rightSum += nums[i];
        }

        if (leftSum === rightSum) return middleIndex;
    }

    return -1;

}

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let hashMapLeftSum = new Map();
    let hashMapRightSum = new Map();

    let leftSum = 0;
    let rightSum = 0;

    // LEFT TO RIGHT
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        hashMapLeftSum.set(i, leftSum);
    }
    // RIGHT TO LEFT
    for (let i = nums.length - 1; i >= 0; i--) {
        rightSum += nums[i];
        hashMapRightSum.set(i, rightSum);
    }

    for (i = 0; i < nums.length; i++) {
        if (hashMapLeftSum.get(i) == hashMapRightSum.get(i)) return i;
    }

    return -1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let totalSum = 0;
    let leftSum = 0;

    for(n of nums){
        totalSum += n;
    }
    for(let i = 0; i < nums.length; i++){
        if(totalSum - leftSum - nums[i] === leftSum){
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}