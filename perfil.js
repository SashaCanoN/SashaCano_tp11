const prompt = require("prompt-sync")({ sigint: true });

let perfil=prompt(console.log("indique su perfil de usuario: "));
console.log("Si es Administrador, Asistente o Invitado");


switch (perfil.toLowerCase()) {
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar,modificar y consultar datos");
    break;
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos")
    case " ":
        console.log("Debe especificar el perfil del usuario");
    break;
    default:console.log("Debe especificar un perfil válido");
    break;
}
