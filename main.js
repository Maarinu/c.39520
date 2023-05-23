// variables //

//declaracion de variables//

//let numero; 
//let numero2;

// solamente declare 2 variables
// en este momento almacenan NADA (no identificado)

//ASIGNACION DE DATOS

//numero = 3;
//numero2= 3.16;

// declaracion e inicializacion 
//let numero3 = 1;

// tipos de datos que puedo almacenar - una variable almacena una solo dato

//let numero;
//let texto;

// tipo number
//numero = 3; // int - entero
//numero = 2.7; // float - flotante

//tipo string
//texto = "denver";

//constantes
/*un espacio de memoria como el de una variable pero la diferencia es que NO podemos alterar su contenido la voy a tener 
    que declarar e inicializar con un valor y siempre tendra el mismo*/

    /*OPERACIONES CON LOS TIPOS DE DATOS NUMBER
    SUMA RESTA MULTIPLICACION DIVISION RESTO*/
    
/*  let resultado;
    let numero1;
    let numero2;

    numero1 = 3;
    numero2 = 8;

    // suma
    resultado = numero1 + numero2;

// multiplicacion
resultado = numero1 * numero2;

// division
resultado = numero1 / numero2;

// resto como buscar un par
resultado = numero1 % 2;

// OPERACIONES CON STRINGS

let frase1 = "hola ";
let frase2 = "me llamo Denver";
let resultadoOperacion;*/

//CONCATENACION 

//resultadoOperacion = frase1 + frase2; // hola me llamo denver


/// CLASE 2 ///

/* TIPO DE DATO BOOLEAN */

///let variableBooleana;

///variableBooleana = true;
///variableBooleana = false;

//sintaxis condicional - if



/// CLASE 3 CICLOS  

/*for (let i = 0; i < 10; i ++) {
    alert (i);
}*/

/*for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt ("Ingresar nombre");
    alert (" Turno N° "+i+" Nombre "+ingresarNombre);
} */

/*for (let i = 1; i <= 10; i++ ){
    if (i == 5) {
        break;
    }
    alert (i);
}*/

/*for (let i = 1; i <= 10; i++ ){
    if (i == 5) {
        continue;
    }
    alert (i);
}*/


/*const talle1 = "85";
const talle2 = "90";
const talle3 = "95";
const talle4 = "100";
const SUMA = '+';

const color1 = "rojo"
const color2 = "blanco"
const color3 = "negro"

let nombre;
let talle;
let color;
let operacion;
let resultado;
let continuar;

do{
    nombre = prompt(" Bienvenido, ingrese su nombre");
    talle = prompt("Hola " + nombre + ' Elija su talle " 85 90 95 100"');
    color = prompt('Elija el color deseado" rojo blanco negro"');

    if (talle == talle){
        alert (nombre + ' Elejiste talle ' + talle + color)
    } else {
        if (talle == color){
            alert (nombre + ' se agrego tu producto a tu carrito')
        } 
        continuar = prompt ('Su producto ya esta en el carrito de compras, desea continuar? s/n');
        }
    }while(continuar == 's')*/


    // AFTER CLASS

    /*let colorProducto;
    let nombreProducto;
    let talle;
    let cantidad;
    let nombreUser;
    let total=0; 
    let opcion;

alert ("Hola Bienvenidos a Lorien, ahora podes crear tus propios productos!!");
nombreUser = prompt('Ingresa tu nombre');
    do {
        nombreProducto = prompt ("Ingresa que producto te gustaria cear");
        colorProducto = prompt ("De que color lo diseñarias?");
        talle = prompt ("Selecciona tu talle XS S M L XL");
        
        cantidad = parseInt(prompt("Ingrese cantidad"));

        if (cantidad <=0) {
            cantidad = parseInt(prompt('Cantidad invalida, ingrese otro item'));
        }else {
        opcion = prompt("Desea agregar otro item?");
        }

    }while (opcion == 'si');

    alert(`El total para ${nombreUser}  es: \n ${cantidad} ${nombreProducto} \n color ${colorProducto} \n talle ${talle}`);

const listaProductos = [];
let cantidadProductos = 5;

do{
    let entrada = prompt('Ingresa el nombre de tu nuevo producto');
    listaProductos.push(entrada.toUpperCase());
    alert(listaProductos.length);

}while (listaProductos.length != cantidadProductos)
const NuevaLista = listaProductos.concat([]);
alert (NuevaLista.join("\n"));*/

/// clase 9 DOM

