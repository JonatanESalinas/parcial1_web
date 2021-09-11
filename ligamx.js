function enviar_datos_contacto(){
    var nombreElement = document.getElementById("nombre_contacto_input")
    var emailElement = document.getElementById("email_contacto_input")

    nombreUsuario = nombreElement.value;
    emailUsuario = emailElement.value;

    alert("Gracias por suscribirse, " + nombreUsuario + ".\nLe llegaran las mejores noticias de la LigaMX al correo:  " + emailUsuario);
}