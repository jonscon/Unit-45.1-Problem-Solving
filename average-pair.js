// add whatever parameters you deem necessary
function averagePair(array, target) {
    // create two pointers, starting at either ends of the array
    let left = 0;
    let right = array.length - 1;

    // move pointers until they cross
    while (left < right) {
        let average = (array[left] + array[right]) / 2;
        if (average === target) {
            return true;
        }
        else if (average > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}

