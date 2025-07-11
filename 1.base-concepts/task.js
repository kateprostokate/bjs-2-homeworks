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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // параметры в числа 
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    countMonths = Number(countMonths);
    // проверка на некорректные значения
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }
    // тело кредита
    const S = amount - contribution;
    if (S <= 0) {
        return 0;
    }
    // месячная процентная ставка
    const P = percent / 100 / 12;
    // формула ежемесячного платежа
    const monthlyPayment = S * (P + (P / ((Math.pow(1 + P, countMonths) - 1))));
    // общая сумма выплат
    const totalPayment = monthlyPayment * countMonths;
    // округление до двух знаков после запятой и возврат числа
    return +totalPayment.toFixed(2);
}


