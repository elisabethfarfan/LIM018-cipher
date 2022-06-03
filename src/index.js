import cipher from './cipher.js';

const btnName = document.getElementById("btnName");
btnName.addEventListener("click",extraerName);

const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click",cifrar);

const btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click",descifrar);

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click",mensajeFinal);


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
function extraerName(){
    document.getElementById("form-container").style.display = 'block';
    const lblNombre = document.getElementById("name").value;
   
    document.getElementById('lbl_name_recib').innerHTML= 'BIENVENID@  '+
     lblNombre.toUpperCase();

    document.getElementById("form-login").style.display = 'none';
    

}
function cifrar(){
    validar();
    const mensajeCifrar = document.getElementById('txtMensajeCifrar').value;
    const offset = document.getElementById('txtOffset').value;
     //cipher.encode(offset,mensajeCifrar)
    document.getElementById('txtMensajeCifrar').value= cipher.encode(offset,mensajeCifrar);
    
}

function descifrar(){
    validar();
    const mensajeDescifrar = document.getElementById('txtMensajeCifrar').value;
    const offset = document.getElementById('txtOffset').value;
     //cipher.encode(offset,mensajeCifrar)
    document.getElementById('txtMensajeCifrar').value= cipher.decode(offset,mensajeDescifrar);

}

function mensajeFinal(){
    const lblNombre = document.getElementById("nameSend").value;
    document.getElementById("form-container").style.display = 'none';
    document.getElementById('mensajeFinal').innerHTML= 'MENSAJE ENVIADO A '+
     lblNombre.toUpperCase();

}
