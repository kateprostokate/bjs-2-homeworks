"use strict";
function solveEquation(a, b, c) {
    let arr = []; // Массив для хранения корней

    if (a === 0) {
        console.error("Коэффициент 'a' не может быть равен нулю!");
        return arr; 
    }

    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        // Нет корней
        return arr;
    } else if (discriminant === 0) {
        // Один корень
        let root = -b / (2 * a);
        arr.push(root); 
    } else {
        // Два корня
        let sqrtDiscriminant = Math.sqrt(discriminant);
        let root1 = (-b + sqrtDiscriminant) / (2 * a);
        let root2 = (-b - sqrtDiscriminant) / (2 * a);
        arr.push(root1, root2);
    }

    return arr; 
}

// Пример использования функции solveEquation
//console.log(solveEquation(1, -3, 2)); // [2, 1] — два корня
//console.log(solveEquation(1, 2, 1));  // [-1] — один корень
//console.log(solveEquation(1, 1, 1));  // [] — нет корней