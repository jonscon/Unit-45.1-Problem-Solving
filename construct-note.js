// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // create a frequency counter
    function createFreqCounter(string) {
        let charCount = new Map();
        for (let char of string) {
            let valCount = charCount.get(char) || 0;
            charCount.set(char, valCount + 1);
        }
        return charCount;
    }

    let msgFreqCounter = createFreqCounter(message);
    let lettersFreqCounter = createFreqCounter(letters);

    // if the size of the message's freqCounter is greater than the letters' freqCounter, return false
    if (msgFreqCounter.size > lettersFreqCounter.size) return false;

    for (let key of msgFreqCounter.keys()) {
        if (!lettersFreqCounter.get(key)) {
            return false;
        }
        if (msgFreqCounter.get(key) > lettersFreqCounter.get(key)) {
            return false;
        }
    }
    return true;
}