function Trapezoid(val, x0, x1, x2, x3) {
    this.x0 = x0;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;

    this.evaluate = function (val) {
        var result = 0;
        var x = val;

        if (x <= this.x0) {
            result = 0;
        } else if (x >= this.x3) {
            result = 0;
        } else if ((x >= this.x1) && (x <= this.x2)) {
            result = 1;
        } else if ((x > this.x0) && (x < this.x1)) {
            result = (x / (this.x1 - this.x0)) - (this.x0 / (this.x1 - this.x0));
        } else {
            result = (-x / (this.x3 - this.x2)) + (this.x3 / (this.x3 - this.x2));
        }
        return result;
    }

    this.getResult = function () {
        return this.evaluate(val);
    }
}
