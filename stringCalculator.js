function add(numbers) {
    if (!numbers) {
        return 0;
    }
    if(numbers.length === 1) {
        return parseInt(numbers);
    }

    const numberList = numbers.split(',');

    let total = 0;
    for (let num of numberList) {
        if (num) {
            total += parseInt(num, 10);
        }
    }

    return total;

}

module.exports = add;