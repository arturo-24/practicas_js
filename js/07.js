// Orden de las operaciones

let resutado;

resultado = (20 + 30) * 2; // colocar parentesis haace que solo se concentre en las operacione sne preferencia

resultado = (100 + 600) * 1.05; // Esta es laa formaa de sacas el descuento de la aoperaacion o incluse peudes colcoaar los impuestos.


console.log(resultado);



//console.log(resultado);

// INcrementos (se ve en faacebook)

let puntaje = 10;

// incremento con 1 ++
puntaje++ ; //impre 11
++puntaje; //impre 12 (ya que el icremento anterior fue un incremento con 1)



puntaje--; // decremento con 1 ya que eso lo tomaria un "-1" 


puntaje += 10; // Este valor sumaria 10 a la variable puntaje
puntaje -= 10; // Este valor restaria 10 a la variable puntaje
puntaje *= 10; // Este valor multipliaria 10 a la variable puntaje
puntaje /= 10; // Este valor dividaria 10 a la variable puntaje
 

console.log(puntaje);
console.log(--puntaje);




// Ejemplo 1: COntador de likes en una Red sociaal (agregar/QUitar like)

//Usuario desea dar o qutiar "like" a una publicacion

let likes = 100;
let usuarioDioLike = false;  // Estado inicial: el usuario no ha dado like

// Función para manejar el like
function toggleLike() {
    if (usuarioDioLike) {
        likes--;  // Si ya dio like, lo quita
        usuarioDioLike = false;
        console.log("Quitaste el like. Total de likes:", likes);
    } else {
        likes++;  // Si no ha dado like, lo suma
        usuarioDioLike = true;
        console.log("Diste like. Total de likes:", likes);
    }
}

// Simulación del usuario interactuando
toggleLike();  // Usuario da like → "Diste like. Total de likes: 101"
toggleLike();  // Usuario quita like → "Quitaste el like. Total de likes: 100"

// Explicacion:
// 1. La variable "usuarioDIoLike" COntrola si el usuario ha dado like o no.
// 2. SI el usuario ya dio Like, al presionar el boton, el codigo resta likes--.
// 3. SI no ha dado like, entonces se suma likes++.
// 4. llamando togglelike(), podemosm simular que el usuario agrego o quita su like dinamicamente.


// Ejemplo 2: Sistema de VIdas en un VIdeojuego 

let vidas = 3;

vidas--;

console.log(vidas); // imprime el resultados de vidas "2"

//Explicacion:
// 1. la varaible "vidas--" resta 1 inemdiaatamente.
// 2. "console.log(vidas); imprime eel nuevo valor (ya reducido)"

