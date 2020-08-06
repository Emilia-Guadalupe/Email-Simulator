//Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");

const formularioEnviar = document.getElementById('enviar-mail');

const resetBtn = document.getElementById('resetBtn');





//Event Listeners
eventListeners();


function eventListeners(){
    //Inicio de la app
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Botón de enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    //Botón de resetear formulario
    resetBtn.addEventListener('click', resetFormulario);
}


//Funciones

function inicioApp(){
    //Deshabilitar el envío
    btnEnviar.disabled = true;
}

//Función para validar campos

function validarCampo(){
    //Se valida la longitud del texto y que no esté vacío

    validarLongitud(this);

    //Validar únicamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }

    }
}

//Resetear el formulario
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}

function enviarEmail(e){
    //Spinner al presionar enviar

    const spinnerGIF = document.querySelector('#spinner');
    spinnerGIF.style.display = 'block';

    //GIF de email enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';

    enviado.style.display = 'block';

    //Ocultar Spinner y mostrar GIF

    setTimeout(function(){
        spinnerGIF.style.display = 'none';

        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
}

function validarLongitud(campo){
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'gold';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;

    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'gold';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}