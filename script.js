function onClick() {
  if (isEmptyInput()) {
    label.textContent = 'Error:: One or Both Inputs Are Empty.';
    return;
  }
  updateSum();
}
function isEmptyInput() {
  if (getNumber_1() === '' || getNumber_2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateSum() {
  var number_1 = getNumber_1();
  var number_2 = getNumber_2();
  var sum = number_1 + number_2;
  label.textContent = number_1 + ' + ' + number_2 + ' = ' + sum;
}
function getNumber_1() {
  return inputs[0].value;
}
function getNumber_2() {
  return inputs[1].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
