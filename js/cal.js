let numeroUno = 0;
let numeroDos = 0;
let resultado = null;
let operador = null;

function add(num1, num2) {
  return Number(num1) + Number(num2); 
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "nopesies ;)";
  else return Math.round((num1 / num2) * 10000) / 10000;
}

 const btns = document.querySelectorAll('.btn');
 const current = document.querySelector('.current');
 const after = document.querySelector('.after');
 btns.forEach((key,index,array)=>{
    key.addEventListener('click',()=>{

        if (key.value==='ac'){
          console.log('entro a ac ', key.value );
          numeroUno = 0;
          numeroDos = 0;
          resultado = null;
          operador = null;
          current.textContent = 0;
        }
        if (!isOperator(key.value) && key.value !== 'ac'){
          current.textContent = key.textContent;
        }
        
        if (isNumber(key.value) && !isOperator(key.value) && operador === null ) {
            numeroUno = Number(numeroUno + '' + key.value);
            console.log('entro a numero uno ', numeroUno);
            current.textContent = numeroUno;
        }
        if (numeroUno !== null && isOperator(key.value)) {
            operador = key.value;
        }
        if (numeroUno !== null && operador !== null && isNumber(key.value)) {
            numeroDos = Number(numeroDos + '' + key.value);
             current.textContent = numeroDos;
            console.log('entro a numero dos ', numeroDos);
        }
         if (numeroUno !== null && operador !== null && numeroDos !== null && key.value == 'igual') {
            numeroUno = operate(Number(numeroUno),operador,Number(numeroDos));
            current.textContent = numeroUno;
            operador = null;
            numeroDos = 0;
        }
    });
 });

 function operate(num1, oper, num2) {
    console.log('Voy a operar numero1 ' + num1 + ' operador ' + oper + ' numero2 ' + num2);
  switch (oper) {
    case "sum":
      return add(num1, num2);
    case "res":
      return subtract(num1, num2);
    case "mul":
      return multiply(num1, num2);
    case "pot":
      return multiply(num1, num2);
    case "divi":
      return divide(num1, num2);
  }
}

function isNumber(valor) {
  return typeof parseInt(valor) === 'number' && Number.isFinite(parseInt(valor));
}
function isOperator(valor) {
    const validOperators = ['sum','res','divi','mul','pot'];
    return validOperators.includes(valor);
}

