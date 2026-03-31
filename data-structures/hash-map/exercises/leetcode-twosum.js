// TIME COMPLEXITY O(N²)
function twoSum(nums, target) {

    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {

            if (i === j) continue;

            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return -1;
}

// TIME COMPLEXITY O(N)
function twoSum(nums, target) {

    const hashMap = new Map();

    // LOOK IN ENTIRE ARRAY
    for (let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];

        if (hashMap.has(diff)) {
            return [hashMap.get(diff), i];
        }

        hashMap.set(nums[i], i);
    }

}

(function () {

    const array = [2, 7, 11, 15];

    const target = 9;

    console.log(twoSum(array, target))

})()
