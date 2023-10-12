function generateFibonacciArray(numbersToGenerate, current = [0, 1], sequence = []) {
    if (numbersToGenerate <= 0) {
        return sequence;
    }
    const nextValue = current[0] + current[1];
    const newCurrent = [current[1], nextValue];
    sequence.push(current[0]);
    return generateFibonacciArray(numbersToGenerate - 1, newCurrent, sequence);
}