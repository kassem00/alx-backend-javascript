// 1-calcul.js

function calculateNumber(type, a, b) {
    switch (type) {
        case 'SUM':
            return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            if (Math.round(b) === 0) {
                return "Error";
            }
            return Math.round(a) / Math.round(b);
        default:
            return "Error";
    }
}

module.exports = calculateNumber;
