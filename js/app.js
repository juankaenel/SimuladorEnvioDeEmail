//Variables
const btnEnviar = document.querySelector('#enviar');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');


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
        
        mostrarError();
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-2','text-center','error'); //la clase error me permitirá hacer el control de cuantos campos tienen error y con eso controlo que no se repita mas de una vez el msj de error

    const errores = document.querySelectorAll('.error'); //con queryselectorall puedo acceder al lenght, y verificar si hay mas de 1 error, con queryselector solo no

    if(errores.length ===0){
        formulario.appendChild(mensajeError);
        //formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }

    
}