const entrar=document.querySelector("#entrar");
const ingresarPIN=document.querySelector("#ingresarPIN");
const opciones=document.querySelector("#opciones");
const estadoOpc=document.querySelector("#estadoOpc");
const retirarDi=document.querySelector("#retirarDi");
const cambiarPinOpc=document.querySelector("#cambiarPinOpc");
const estadoCue=document.querySelector('.estadoCue');
const salir=document.querySelector('#salir');
const confirmar=document.querySelector('#confirmar');
const retiro=document.querySelector('#retiro');
const contiPinAnti=document.querySelector('contiPinAnti');



var pin = 1234;
var estadoCuenta = 1000;
var monoRetirar=0;



function ocultar(){
	
}

function mostrarIngresarPIN(){
	document.getElementById('ingresarPIN').style.display = 'block';
	document.getElementById('entrar').style.display = 'none';
}



function mostrarOpc(){
	var pinIgresado=document.getElementById('pin').value;
	if(pinIgresado==pin){
		document.getElementById('ingresarPIN').style.display = 'none';
		document.getElementById('opciones').style.display = 'block';
	}
	else{
		mostrarInicio()
	}
}
 

 function mostarRetiro(){
 	document.getElementById('opciones').style.display = 'none';
	document.getElementById('retirarDi').style.display = 'block';
	confirmar.addEventListener("click", realizarRetiro);
	
	
 }
 function realizarRetiro(){
 	montoRetirar=document.getElementById('monto').value;
 	if(montoRetirar>estadoCuenta){
		mostrarInicio();
	}
	else{
		estadoCuenta=estadoCuenta-montoRetirar;
		mostrarEstadoCuenta();
	}
 	
 }
 retiro.addEventListener("click", mostarRetiro);

function mostrarEstadoCuenta(){
	document.getElementById('retirarDi').style.display = 'none';
 	document.getElementById('opciones').style.display = 'none';
	document.getElementById('estadoOpc').style.display = 'block';
	estadoCue.textContent = "$ "+estadoCuenta;
}



function mostrarInicio(){
	document.getElementById('ingresarPIN').style.display = 'none';
	document.getElementById('pin').value = "";
	document.getElementById('monto').value = "";
	document.getElementById('opciones').style.display = 'none';
	document.getElementById('estadoOpc').style.display = 'none';
	document.getElementById('retirarDi').style.display = 'none';
	document.getElementById('cambiarPinOpc').style.display = 'none';
	document.getElementById('entrar').style.display = 'block';
}

salir.addEventListener("click", mostrarInicio);