
const form = document.querySelector('#form');
const result = document.querySelector("#result");


form.addEventListener("submit", convertir);


function convertir(){

    event.preventDefault();

        var pesos = document.getElementById("pesos").value;

        var dolar;
        var euro; 
        var franco;
        var libra;
        var yen;
        var yuan;
        var p_mex;
        var p_arg;
        

        dolar   = parseFloat(pesos / 4639);
        euro   = parseFloat(pesos / 4521);
        franco   = parseFloat(pesos / 4664);
        libra   = parseFloat(pesos / 5144);
        yen  = parseFloat(pesos / 31.92);
        yuan   = parseFloat(pesos / 652);
        p_mex  = parseFloat(pesos / 231.54);
        p_arg   = parseFloat(pesos / 30.92);

        result.innerText= "Su dinero en otras monedas (08/10/22) equivale a :\n\nDolares Americános:  " + dolar  +
                                                                            "\nEuros:  "                + euro   +
                                                                            "\nFrancos:  "              + franco +
                                                                            "\nlibras:  "               + libra  +
                                                                            "\nYenes:  "                + yen    +
                                                                            "\nYuanes:  "               + yuan   + 
                                                                            "\nPesos Mexicanos:  "      + p_mex  +
                                                                            "\nPesos Argentinos:  "     + p_arg ;
                                                                            
}        
        
    
