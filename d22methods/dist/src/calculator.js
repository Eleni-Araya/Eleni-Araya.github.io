export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues: function (operand1, operand2) {
        this.operand1 = operand1; //+prompt('a?',0)
        this.operand2 = operand2;
    },
    sum: function () {
        return this.operand1 + this.operand2;
    },
    mul: function () {
        return this.operand1 * this.operand2;
    }
};
