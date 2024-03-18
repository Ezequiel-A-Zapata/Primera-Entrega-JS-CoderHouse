
function elegirPalabraAlAzar() {
    let palabras = ["piedra", "papel", "tijera"];
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

let palabraElegida = elegirPalabraAlAzar();

alert ("BIEVENIDO A PIEDRA PAPEL O TIJERA, EN EL PROXIMO AVISO DEBERA INGRESAR (piedra,papel o tijera) SEGUN LO DESEE. MUCHA SUERTE! ");

let palabraJugador = prompt (" ingrese: piedra, papel o tijera").toLowerCase();
let continuar= true;

function jugar (palabra1, palabra2) {
    
    while (continuar && (palabra2 === "piedra" || palabra2 === "papel" || palabra2 === "tijera")){
    if (palabra1 == palabra2) {
        alert( "es un empate")
        continuar = false;
    }else {
    switch (palabra1){
        case 'piedra':
            if (palabra2 === "tijera") {
                alert ("perdiste");
            }else {
                alert ("ganaste");
            }
            break;
        case 'papel':
            if (palabra2 === "piedra") {
                alert ("perdiste");
            }else {
                alert ("ganaste");
            }
            break;
        case 'tijera':
            if (palabra2 === "papel") {
                alert ("perdiste");
            }else{
                alert ("ganaste");
            }
            break;
            }
        }
        continuar=false;
    }
    if (palabra2 === ""){
        alert ("no has ingresado nada");
    } else if (palabra2 != "piedra" && palabra2 != "papel" && palabra2 != "tijera"){
        alert ("palabra incorrecta");
    }
    alert ("PARA JUGAR NUEVAMENTE REINICIE LA PAGINA");
}
jugar (palabraElegida,palabraJugador);
console.log ("la palabra elegida era " + palabraElegida + ". Y vos elegiste " + palabraJugador);
