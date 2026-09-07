
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
