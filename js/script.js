window.onload = function(){
  var inputR = document.getElementById('red');
  var inputG = document.getElementById('green');
  var inputB = document.getElementById('blue');

  inputR.addEventListener("keyup", cambioValor);
  inputG.addEventListener("keyup", cambioValor);
  inputB.addEventListener("keyup", cambioValor);
  inputR.addEventListener("keyup", validar);
  inputG.addEventListener("keyup", validar);
  inputB.addEventListener("keyup", validar);
};

function validar(){
  if (this.value > 255){
    this.value = 255;
  }

  if (this.value < 0){
    this.value = 0;
  }

  cambioValor();
}

function cambioValor(){
  var valueR = document.getElementById('red').value;
  var valueG = document.getElementById('green').value;
  var valueB = document.getElementById('blue').value;

  var hexa = '#' + toHex(valueR) + toHex(valueG) + toHex(valueB);

  document.body.style.background = hexa;
  document.getElementById("texto").innerText = "Valor hexadecimal: " + hexa;
}

function toHex(d) {
    return ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
