
function tieneTexto(texto) {
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] != " " && texto[i] != "\t" && texto[i] != "\n" && texto[i] != "\r") {
            return true;
        }
    }
    return false;
}


function correoValido(correo) {
    var arrobas = 0;
    var posicionArroba = -1;
    var posicionPunto = -1;

    for (var i = 0; i < correo.length; i++) {
        if (correo[i] == " " || correo[i] == "\t" || correo[i] == "\n" || correo[i] == "\r") {
            return false;
        }
        if (correo[i] == "@") {
            arrobas = arrobas + 1;
            posicionArroba = i;
        }
        if (correo[i] == ".") {
            posicionPunto = i;
        }
    }

    if (arrobas == 1 && posicionArroba > 0 && posicionPunto > posicionArroba + 1 && posicionPunto < correo.length - 1) {
        return true;
    }
    return false;
}

// El teléfono se completa sin +56, espacios ni letras.
function telefonoValido(telefono) {
    if (telefono.length != 9) {
        return false;
    }
    for (var i = 0; i < telefono.length; i++) {
        if (telefono[i] < "0" || telefono[i] > "9") {
            return false;
        }
    }
    return true;
}

function validarContacto() {
    // 1. Leer lo que la persona escribió en cada campo.
    var nombre = document.getElementById("nombreContacto").value;
    var correo = document.getElementById("correoContacto").value;
    var telefono = document.getElementById("telefonoContacto").value;
    var motivo = document.getElementById("motivoContacto").value;
    var mensaje = document.getElementById("mensajeContacto").value;
    var valido = true;

    // 2. Limpiar los mensajes de la revisión anterior.
    document.getElementById("errorNombreContacto").innerHTML = "";
    document.getElementById("errorCorreoContacto").innerHTML = "";
    document.getElementById("errorTelefonoContacto").innerHTML = "";
    document.getElementById("errorMotivoContacto").innerHTML = "";
    document.getElementById("errorMensajeContacto").innerHTML = "";
    document.getElementById("resultadoContacto").innerHTML = "";

    // 3. Cada condición revisa una regla del formulario.
    if (!tieneTexto(nombre) || nombre.length > 100) {
        document.getElementById("errorNombreContacto").innerHTML = "Escribe tu nombre, con un máximo de 100 caracteres.";
        valido = false;
    }
    if (!correoValido(correo) || correo.length > 100) {
        document.getElementById("errorCorreoContacto").innerHTML = "Escribe un correo como nombre@correo.cl, de máximo 100 caracteres.";
        valido = false;
    }
    if (telefono != "" && !telefonoValido(telefono)) {
        document.getElementById("errorTelefonoContacto").innerHTML = "Escribe 9 dígitos, sin +56 ni espacios, o deja el teléfono vacío.";
        valido = false;
    }
    if (motivo == "") {
        document.getElementById("errorMotivoContacto").innerHTML = "Selecciona el motivo de tu consulta.";
        valido = false;
    }
    if (!tieneTexto(mensaje) || mensaje.length > 500) {
        document.getElementById("errorMensajeContacto").innerHTML = "Escribe un mensaje, con un máximo de 500 caracteres.";
        valido = false;
    }

    // 4. El resultado aparece solo cuando no quedan errores.
    if (valido) {
        document.getElementById("resultadoContacto").innerHTML = "Datos correctos. Revisión de práctica completada: la consulta no se ha enviado ni guardado.";
    }
    return valido;
}
