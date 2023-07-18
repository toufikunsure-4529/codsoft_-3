let result = document.getElementById('result') //Input Element select
let operators = ['+', '-', '*', '/', '%'] //all operator store a array

//function User input a number reult input Box show 
function append(value) {
  result.value += value;
}

// Function to clear the input field
function clearInput() {
  document.getElementById('result').value = '';
}

// Function to backspace the input field
function del() {
  let input = result.value;
  result.value = input.slice(0, -1)
}

// Function to calculate the result
function calculate() {
  let expression = result.value;
  let resultFinal = eval(expression);
  result.value = resultFinal
}



function keyboardInput(event) {
  const key = event.key;

  switch (key) {
    case '0':
      append('0');
      break;
    case '1':
      append('1');
      break;
    case '2':
      append('2');
      break;
    case '3':
      append('3');
      break;
    case '4':
      append('4');
      break;
    case '5':
      append('5');
      break;
    case '6':
      append('6');
      break;
    case '7':
      append('7');
      break;
    case '8':
      append('8');
      break;
    case '9':
      append('9');
      break;
    case '%':
      append('%');
      break;
    case '/':
      append('/');
      break;
    case '*':
      append('*');
      break;
    case '-':
      append('-');
      break;
    case '+':
      append('+');
      break;
    case '.':
      append('.');
      break;
    case 'Enter':
      calculate();
      break;
    case 'Backspace':
      del();
      break;
    case 'Delete':
      clearInput();
      break;
    case 'F2':
      clearInput();
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', keyboardInput);
