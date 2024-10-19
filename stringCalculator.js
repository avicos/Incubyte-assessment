function add(numbers) {
    if (!numbers) {
        return 0;
    }

    numbers = numbers.replace(/\n/g, ',').replace(/;/g, ',');
 
    const numberList = numbers.split(',');

    let total = 0;
    for (let num of numberList) {
        if(num < 0) {
            throw new Error("Negative numbers not allowed: " + num);
        }
        if (num) {
            total += parseInt(num, 10);
        }
    }

    return total;

}

module.exports = add;