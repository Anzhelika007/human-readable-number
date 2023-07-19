module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let result = '';
    let num = number;

    function numberMinTwenty(number) {

        if (number < 20 && number > 0) {
            return numbers[number];
        }
        return '';
    }

    function numberMinHundred(number) {
        if (number >= 20 && number < 100) {
            if (number % 10 !== 0) {
                return dozens[Math.floor(number / 10) - 2] + ' ' + numbers[number % 10];
            } else {
                return dozens[Math.floor(number / 10) - 2];
            }
        }
        return '';
    }

    function numberMoreHundred(number) {
        if (number >= 100) {
            result = numbers[Math.floor(number / 100)] + ' ' + hundred;
            number = number % 100;
            return [result, number];
        }
        return [result, number];
    }

    if (num === 0) {
        return numbers[0];
    } else {
        [result, num] = numberMoreHundred(num);
        result += ' ' + numberMinHundred(num);
        result += ' ' + numberMinTwenty(num);
    }


    return result.replace('  ', ' ').trim();
}
