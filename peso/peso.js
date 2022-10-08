

const form = document.querySelector('#form');
const result = document.querySelector("#result");


form.addEventListener("submit", calcularPeso);


function calcularPeso(){

    event.preventDefault();

        var peso = document.getElementById("peso").value;

        const tierra = 9.8;
        var mercurio;
        var venus; 
        var marte;
        var jupiter;
        var saturno;
        var urano;
        var neptuno;
        var pluton;
        var luna;

        mercurio = parseInt(peso * 3.7/ tierra);
        venus    = parseInt(peso * 8.87/ tierra);
        marte    = parseInt(peso * 3.7/ tierra);
        jupiter  = parseInt(peso * 24.8/ tierra);
        saturno  = parseInt(peso * 10.44/ tierra);
        urano    = parseInt(peso * 8.87/ tierra);
        neptuno  = parseInt(peso * 11.15/ tierra);
        pluton   = parseInt(peso * 0.62/ tierra);
        luna     = parseInt(peso * 1.62/ tierra)

        result.innerText= "Su Peso en otros Planetas:\n\nMercurio: " + mercurio + " Kg." + 
                                                      "\nVenus: "    + venus    + " Kg." +
                                                      "\nMarte: "    + marte    + " Kg." +
                                                      "\nJúpiter: "  + jupiter  + " Kg." +
                                                      "\nSaturno: "  + saturno  + " Kg." +
                                                      "\nUrano: "    + urano    + " Kg." + 
                                                      "\nNeptuno: "  + neptuno  + " Kg." +
                                                      "\nPlutón: "   + pluton   + " Kg." +
                                                      "\nLa Luna: "  + luna     + " Kg.";
                          
}        
        
    
        
