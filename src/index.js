import cipher from './cipher.js';


const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click",cifrar);

const btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click",descifrar);


function validar(){
    if(document.getElementById('txtMensajeCifrar').value =="" && document.getElementById('txtOffset').value==""){
        alert("ingrese los valores");
    }
     else if(document.getElementById('txtMensajeCifrar').value =="" ){

        alert("ingrese el texto a cifrar");

    }
    else if( document.getElementById('txtOffset').value==""){
        alert('ingrese un numero en el offet');
    }

}
function cifrar(){
    validar();
    const mensajeCifrar = document.getElementById('txtMensajeCifrar').value;
    const offset = document.getElementById('txtOffset').value;
     //cipher.encode(offset,mensajeCifrar)
    document.getElementById('txtCifrado').innerHTML= cipher.encode(offset,mensajeCifrar);
    
}

function descifrar(){
    const mensajeDescifrar = document.getElementById('txtMensajeCifrar').value;
    const offset = document.getElementById('txtOffset').value;
     //cipher.encode(offset,mensajeCifrar)
    document.getElementById('txtCifrado').innerHTML= cipher.decode(offset,mensajeDescifrar);

}
