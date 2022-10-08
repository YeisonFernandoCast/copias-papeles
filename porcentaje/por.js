
const result = document.querySelector("#result");

form.addEventListener("submit", calcularPorcentaje);



function calcularPorcentaje() {
  
    // Method returns the element of percent id
    var porcentaje = document.getElementById("percent").value;
      
    // Method returns the element of num id
    var valor = document.getElementById("num").value;
    

    //result.innerText = (valor / 100) * porcentaje;
    result.innerText= "El " + porcentaje + "%  de  " +  valor + "  es:    $ " + ((valor / 100) * porcentaje) + " Pesos..✔";
    
}
