module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let num = String(number).padStart(3, '0');
    let result = '';
    if (Number(num[0]) > 0) {
        result += `${numbers[Number(num[0])]} ${hundred}`;
    }
    if (Number(num[1]) !== 0) {
        if (Number(num[1]) === 1) {
            return (result += ` ${numbers[Number(num.slice(1,))]}`).trim();
        } else {
            result += ` ${dozens[Number(num[1]) - 1]}`;
        }
    }
    if (Number(num[2]) > 0) {
        result += ` ${numbers[Number(num[2])]}`
    }
    if (number === 0) {
        return `${numbers[0]}`
    }

    return result.trim()
}
