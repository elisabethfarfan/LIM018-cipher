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
    document.getElementById('txtCifrado').value= cipher.encode(offset,mensajeCifrar);
    
}

function descifrar(){
    validar();
    const mensajeDescifrar = document.getElementById('txtMensajeCifrar').value;
    const offset = document.getElementById('txtOffset').value;
     //cipher.encode(offset,mensajeCifrar)
    document.getElementById('txtCifrado').value= cipher.decode(offset,mensajeDescifrar);

}
