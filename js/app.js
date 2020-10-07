//Variables
const btnEnviar = document.querySelector('#enviar');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
//expresión regular
const expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
       

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
    // -------------- Validación de campos en general con colores verde y rojo --------------
    if(e.target.value.length > 0){ //campo no vacío 
        //eliminamos el parrafo de error
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.add('border','border-green-500');
        //eliminamos los errores
        e.target.classList.remove('border','border-red-500'); //remuevo el borde rojo en caso q exista y agrego el verde
      
    }
    else{ //campo vacío
        //e.target.style.borderBottomColor = 'red';
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500'); //le doy clases de tailwind cuando no hay nada en el input
        mostrarError('Todos los campos son obligatorios');
    }
    //-------------- Validación de email --------------
    if(e.target.type==='email'){
        //const resultado = e.target.value.indexOf('@'); //retorna -1 cuando es false
        if(expReg.test( e.target.value )){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.add('border','border-green-500');
            e.target.classList.remove('border','border-red-500'); //remuevo el borde rojo en caso q exista y agrego el verde
        }
        else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500'); //le doy clases de tailwind cuando no hay nada en el input
            mostrarError('Email no válido');
        }
    }

    //email.value hace referencia a los campos de la parte superior -> variables para campos -> linea 5 en cambio e.target.value hace referencia al campo actual
    if(expReg.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        //pasa la validación y se activa el botón para enviar
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
    else{
        //no pasa validación
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-2','text-center','error'); //la clase error me permitirá hacer el control de cuantos campos tienen error y con eso controlo que no se repita mas de una vez el msj de error

    const errores = document.querySelectorAll('.error'); //con queryselectorall puedo acceder al lenght, y verificar si hay mas de 1 error, con queryselector solo no

    if(errores.length ===0){
        formulario.appendChild(mensajeError);
        //formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }

    
}