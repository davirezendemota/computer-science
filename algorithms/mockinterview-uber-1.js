'use strict'

/*
Dado um array, encontre o elemento que mais se repete.
Se multiplos elementos aparecerem igualmente, retorne qualquer um deles.
*/

function fun(nums) {

    const frequencyObj = {};

    let maxFreq = 0;
    let maxFreqNum;

    for (const n of nums) {

        let freq = frequencyObj[n] ?? 0;

        frequencyObj[n] = freq + 1;

        if (freq > maxFreq) {
            maxFreq = freq;
            maxFreqNum = n;
        }

    }

    return maxFreqNum;
}


(function () {

    const test1 = {
        nums: [1, 3, 5, 1, 2, 2, 6, 18, 12, 3, 4, 2],
        expected: 2
    };

    if (test1.expected === fun(test1.nums)) {
        console.log('test accepted');
    } else {
        console.log('test failed');
    }

})()