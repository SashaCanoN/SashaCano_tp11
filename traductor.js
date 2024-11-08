let palabra = "Gato";

let traduccion;
switch (palabra.toLowerCase()) {
    case "Perro":
        traduccion = "dog";
        break;    
        case "Gato":
        traduccion = "cat";
        break;
    case "Puerta":
        traduccion = "door";
        break;
    case "Ventana":
        traduccion = "window";
        break;
    case "Mesa":
        traduccion = "table";
        break;
    default:
        traduccion = "La palabra ingresada es incorrecta";
}

console.log(traduccion);