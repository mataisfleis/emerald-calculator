var inputElement = document.getElementById("emequa");
var boton = document.getElementById("emebutt");

boton.addEventListener("click", function () {
    var resultEl = document.getElementById("result");
    var inputCalc = inputElement.value;
    var result = (inputCalc * 4)
    if(isNaN(result)){
        result = "Error: Input is Not a number"
    }else if(result <= 0) result = "Error: Input must be greater than 0"
    resultEl.innerHTML = result
    console.log("Texto ingresado: " + inputCalc + " Resultado: " + result);
    console.log(result);
});