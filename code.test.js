const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

function generateFibonacciArray(numbersToGenerate, current = [0, 1], sequence = []) {
    if (numbersToGenerate <= 0) {
        return sequence;
    }
    const nextValue = current[0] + current[1];
    const newCurrent = [current[1], nextValue];
    sequence.push(current[0]);
    return generateFibonacciArray(numbersToGenerate - 1, newCurrent, sequence);
}

const fibTest = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};

const test = jsc.forall("nat", function (n) {
    return JSON.stringify(generateFibonacciArray(n)) === JSON.stringify(fibTest(n));
});

jsc.assert(test);
