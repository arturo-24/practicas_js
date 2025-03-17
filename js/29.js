// Try Catch
// Intenta pasarse un error automaticamente para que no afecte todo el codigo.
const numero1 = 20;
const numero2 = 30;

console.log(numero1);

try {
    console.log(numero3);
} catch (error) {
    console.log(error);
}

console.log(numero2);
// console.log(numero3); BOrramos este ya que estamos dejando un try catch arriba