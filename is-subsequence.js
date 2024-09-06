// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // multiple pointers
    // pointer 1 will iterate +1 every time it is equal to the letter at pointer 2
    // if pointer 1 reaches to the end of its string, then return true
    // if pointer 2 reaches the end of the string, but pointer 1 hasn't, then return false
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < str1.length) {
        if (pointer2 >= str2.length) return false;
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
        }
        else {
            pointer2++;
        }
    }
    return true;
}