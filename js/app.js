//Variables
const btnEnviar = document.querySelector('#enviar');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');



eventListeners();
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur',validarFormulario); //blur se activa cuando estoy dentro del input y me salgo
    asunto.addEventListener('blur',validarFormulario); 
    mensaje.addEventListener('blur',validarFormulario); 
}

//Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    console.log('Iniciando...');
}

//Validar formulario
function validarFormulario(e){
    // console.log(e.target.value);
    if(e.target.value.length > 0){
        console.log('Si hay algo');
    }
    else{
        //e.target.style.borderBottomColor = 'red';
        e.target.classList.add('border','border-red-500'); //le doy clases de tailwind cuando no hay nada en el input
    }
}