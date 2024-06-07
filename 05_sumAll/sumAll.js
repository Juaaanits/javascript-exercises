const sumAll = function(minimum, maximum) {
    if (minimum < 0 || maximum < 0) return "ERROR";
    if (!Number.isInteger(minimum) || !Number.isInteger(maximum)) return "ERROR";
    if (typeof minimum !== 'number' || typeof maximum !== 'number') return "ERROR";

    let finalSum = 0;

    if (minimum > maximum) {
        // Swap the values
        [minimum, maximum] = [maximum, minimum];
    }

    for (let i = minimum; i <= maximum; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;