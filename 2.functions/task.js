function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number < min) min = number;
    if (number > max) max = number;
    sum += number;
  }

  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
