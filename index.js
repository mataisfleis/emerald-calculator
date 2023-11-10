var inputElement = document.getElementById("emequa");
var boton = document.getElementById("emebutt");

boton.addEventListener("click", function () {
    var resultEl = document.getElementById("result");
    var inputCalc = inputElement.value;
    var result = (inputCalc * 4)
    resultEl.innerHTML = result
    console.log("Texto ingresado: " + inputCalc + " Resultado" + result);
});