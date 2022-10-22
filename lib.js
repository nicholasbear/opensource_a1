function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function med(numbers) {
    const mid = Math.floor(numbers.length / 2);
    numbers.sort(function(a, b) {
        return a - b;
    });
    return numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
}

function iqr(numbers) {
    const mid = Math.floor(numbers.length / 2);
    numbers.sort(function(a, b) {
        return a - b;
    });
    const first = numbers.splice(0, mid)
    const second = numbers.splice(-mid)
    return med(second) - med(first);
}

function outlier(numbers) {
    var copy = numbers.concat();
    copy.sort( function(a, b) {
        return a - b;
    });
    const mid = Math.floor(numbers.length / 2);
    const first = copy.splice(0, mid)
    const second = copy.splice(-mid)
    var q1 = med(first);
    var q3 = med(second);
    var iqr = q3 - q1;
    var high = q3 + iqr*1.5;
    var low = q1 - iqr*1.5;
    var result = numbers.filter(function(x) {
        if ((x > high) || (x < low))
            return x;
    });

    return result;
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
};