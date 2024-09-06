// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    // create a frequency counter that tracks each number and its count in the integer
    // compare the two counters (if they have the same digit and count, then true)

    // frequency counter helper function
    function createFreqCounter(int) {
        let freq = {};
        let integer = int.toString();
        for (let num of integer) {
            let valCount = freq[num] || 1;
            freq[num] = valCount + 1;
        }
        return freq;
    }

    // if both numbers are not matching in length, they will not have the same frequency
    if (int1.toString().length !== int2.toString().length) return false;

    // create frequency counters for both integers
    let freqCounter1 = createFreqCounter(int1);
    let freqCounter2 = createFreqCounter(int2);

    for (let key of Object.keys(freqCounter1)) {
        if (!freqCounter2[key]) return false;
        if (freqCounter1[key] !== freqCounter2[key]) return false;
    }
    return true;
}