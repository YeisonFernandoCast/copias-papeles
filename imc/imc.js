
const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector("#peso");
const input2 = document.querySelector("#estatura");
//const btn = document.querySelector("#btnCalcular");
//const btnexit = document.querySelector("#salir");
const result = document.querySelector("#result");


form.addEventListener("submit", calcularImc);


function calcularImc(){
    event.preventDefault();
    
    const imc = (peso.value/(estatura.value * estatura.value));
    
    if (imc <= 20){
        result.innerText= "Su IMC es: " + imc + ",   " + "Cuidado, usted tiene bajo peso. 🤔";
    }
    else if(imc > 20 &&  imc <= 24)
	{
         result.innerText= "Su IMC es: " + imc + ",   " + "Usted tiene un peso normal. 🤗";
	}
    else if(imc> 24 &&  imc <= 29){
        result.innerText= "Su IMC es: " + imc + ",   " + "Usted tiene obesidad leve. 🙄"; 
    }
    else if (imc > 29 &&  imc <= 37){
        result.innerText= "Su IMC es: " + imc + ",   " + "Preocupante !!! Usted tiene Obesidad severa. 💥"; 
    }
    else 
    {
        result.innerText= "Su IMC es: " + imc + ",   " + "Estas grave, Obesidad MUy severa. ❌"; 
    }   
    
}
   
