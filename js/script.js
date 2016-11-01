window.onload = function(){
  var inputR = document.getElementById('red');
  var inputG = document.getElementById('green');
  var inputB = document.getElementById('blue');
  var radioRGB = document.getElementById('radio-rgb');
  var radioHexa = document.getElementById('radio-hexa');
  var inputHexa = document.getElementById('input-hexa');

  inputR.focus();
  inputR.addEventListener("keyup", validarRGB);
  inputG.addEventListener("keyup", validarRGB);
  inputB.addEventListener("keyup", validarRGB);
  radioRGB.addEventListener("click", cambioRadio);
  radioHexa.addEventListener("click", cambioRadio);
  inputHexa.addEventListener("keyup", cambioHexa);
};

function cambioRadio(){
  var radioRGB = document.getElementById('radio-rgb');
  var radioHexa = document.getElementById('radio-hexa');
  var inputR = document.getElementById('red');
  var inputG = document.getElementById('green');
  var inputB = document.getElementById('blue');

  if (radioRGB.checked){
    document.querySelector(".input-rgb").style.display = "block";
    document.querySelector("#div-hexa").style.display = "none";
    document.querySelector(".input-hexa").value = "";
    document.getElementById('red').focus();
  } else {
    document.querySelector(".input-rgb").style.display = "none";
    document.querySelector("#div-hexa").style.display = "block";
    inputR.value = "";
    inputG.value = "";
    inputB.value = "";
    document.getElementById('input-hexa').focus();
  }
}

function validarHexa(){
  var valor = document.getElementById('input-hexa').value;
  var valorNuevo = "";

  for (var i = 0; i<valor.length; i++){
    if (valor[i].toUpperCase() != "A" &&
    valor[i].toUpperCase() != "B" &&
    valor[i].toUpperCase() != "C" &&
    valor[i].toUpperCase() != "D" &&
    valor[i].toUpperCase() != "E" &&
    valor[i].toUpperCase() != "F" &&
    isNaN(valor[i]) ){
      valorNuevo += "F";
    } else {
      valorNuevo += valor[i].toUpperCase();
    }
  }
  document.getElementById('input-hexa').value = valorNuevo;
}

function cambioHexa(){

  validarHexa();

  var inputHexa = document.getElementById('input-hexa');
  var color = "";
  switch(inputHexa.value.length){
    case 0:
      color = "000000";
        console.log("0");
      break;
    case 1:
      color = inputHexa.value.toUpperCase() + '00000';
      console.log("1");
      break;
    case 2:
      color = inputHexa.value.toUpperCase() + '0000';
      console.log("2");
      break;
    case 3:
    console.log("3");
      color = inputHexa.value.toUpperCase() + '000';
      break;
    case 4:
      color = inputHexa.value.toUpperCase() + '00';
      break;
    case 5:
    console.log("5");
      color = inputHexa.value.toUpperCase() + '0';
      break;
    case 6:
    console.log("6");
      color = inputHexa.value.toUpperCase();
      break;
  }
    document.body.style.background = '#' + color;
}

function validarRGB(){
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

  focusNext();
}

function toHex(d) {
    return ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
}

function focusNext(){
  var valueR = document.getElementById('red');
  var valueG = document.getElementById('green');
  var valueB = document.getElementById('blue');

  if(valueR === document.activeElement && valueR.value.length == 3){
    valueG.focus();
  } else if (valueG === document.activeElement && valueG.value.length == 3) {
    valueB.focus();
  }

}
