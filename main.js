function tipoCafe(precioCapuchino, precioEspresso, precioMoca, precioMacchiato) {
  //constante de mensaje (es muy largo)
  const mensaje = "Vamos a preparar tu cafe!\nElegí una de las siguientes opciones:\n 1: Capuchino - " + precioCapuchino + "$\n 2: Espresso - "
    + precioEspresso + "$\n 3: Moca - " + precioMoca + "$\n 4: Macchiato - " + precioMacchiato + "$";

  let opcion = parseInt(prompt(mensaje));
  //El while sirve para validar la opcion ingresada, se 'corta' al ejecutar un return
  while (true) {
    switch (opcion) {
      case 1:
        return precioCapuchino;
      case 2:
        return precioEspresso;
      case 3:
        return precioMoca;
      case 4:
        return precioMacchiato;
      default:
        alert(nombre + ", no ingreso ninguna de las opciones disponibles! Vuelva a ingresar");
        opcion = parseInt(prompt(mensaje));
        break;
    }
  }
}

function tamaño(costo) {
  const mensaje = "Vamos a personalizar tu cafe!\nElegí una de las siguientes opciones:\n 1: Tamaño Gigante - " + (costo * 1.5) +
    "$\n 2: Tamaño Grande  - " + (costo * 1.3) + "$\n 3: Tamaño Normal - " + costo + "$";
  let opcion = parseInt(prompt(mensaje));
  //El while sirve para validar la opcion ingresada, se 'corta' al ejecutar un return
  while (true) {
    switch (opcion) {
      case 1:
        return (costo * 1.5);
      case 2:
        return (costo * 1.3);
      case 3:
        return costo;
      default:
        alert(nombre + ", no ingreso ninguna de las opciones disponibles! Vuelva a ingresar");
        opcion = parseInt(prompt(mensaje));
        break;
    }
  }
}

function toppings(cacao, sirope, caramelo, crema, almendra, coco, soja) {
  let opcion;
  let total = 0;
  while (opcion != 0) {
    const mensaje = "Podes ademas elegir los siguientes toppings!\nElegí una de las siguientes opciones:\n 1: lluvia de cacao - " + cacao +
      "$\n 2: Sirope  - " + sirope + "$\n 3: Caramelo - " + caramelo + "$\n 4: CremaExtra - " + crema + "$\n 5: Leche de almendras - "
      + almendra + "$\n 6: Leche de coco - " + coco + "$\n 7: Leche de soja - " + soja + "$\n 0: Para continuar con la compra";
    const msjAgregado = "topping agregado, puedes seleccionar mas toppings o ingresar 0 para seguir";
    opcion = parseInt(prompt(mensaje));
    switch (opcion) {
      case 1:
        total += cacao;
        alert(msjAgregado);
        break;
      case 2:
        total += sirope;
        alert(msjAgregado);
        break;
      case 3:
        total += caramelo;
        alert(msjAgregado);
        break;
      case 4:
        total += crema;
        alert(msjAgregado);
        break;
      case 5:
        total += almendra;
        alert(msjAgregado);
        break;
      case 6:
        total += coco;
        alert(msjAgregado);
        break;
      case 7:
        total += soja;
        alert(msjAgregado);
        break;
      case 0:
        alert("El costo total de los toppings agregados es de: " + total);
        break;
      default:
        alert(nombre + ", no ingreso ninguna de las opciones disponibles! Vuelva a ingresar");
        break;
    }
  }
  return total;
}

function main() {
  //defino variables, que mas adelante seran arrays
  nombre = prompt("Por favor, Ingrese su nombre:");
  const precioCapuchino = 120;
  const precioEspresso = 100;
  const precioMoca = 130;
  const precioMacchiato = 140;
  const precioCacao = 10;
  const precioSirope = 20;
  const precioCaramelo = 20;
  const precioCrema = 20;
  const precioLecheAlmendra = 35;
  const precioLecheCoco = 30;
  const precioLecheSoja = 25;

  alert("Bienvenid@ a CannellaCoffe " + nombre + "!\nCreá tu propio Café!");
  costo = tipoCafe(precioCapuchino, precioEspresso, precioMoca, precioMacchiato);
  costo = tamaño(costo);
  costo += toppings(precioCacao, precioSirope, precioCaramelo, precioCrema, precioLecheAlmendra, precioLecheCoco, precioLecheSoja);
  //Se pueden agregar posteriormente formas de pago
  alert("Muchisimas gracias por tu compra " + nombre + "! El costo de tu café es de: " + costo + "$\nPodes pasarlo a retirar en nuestro local!");

}

main();