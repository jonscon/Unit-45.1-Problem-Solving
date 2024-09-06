    /** two pointers - left and right
     * the left pointer will look for negative values
     * the right pointer will look for positive values
     * the moment the two values are met, swap them 
    */
   function separatePositive(arr) {
    // swap helper function
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        return arr;
    }
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] > 0) {
            left++;
        }
        if (arr[right] < 0) {
            right--;
        }
        
        if (arr[left] < 0 && arr[right] > 0) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return arr;
}