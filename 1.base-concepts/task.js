"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        // нет корней
        return arr;
    } else if (discriminant === 0) {
        // один корень
        arr.push(-b / (2 * a));
    } else {
        // два корня
        let sqrtDiscriminant = Math.sqrt(discriminant);
        arr.push(
            (-b + sqrtDiscriminant) / (2 * a),
            (-b - sqrtDiscriminant) / (2 * a)
        );
    }
    return arr;
}