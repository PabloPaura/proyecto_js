//Descripción del simulador: 
//Calculador de descuentos y cantidad de cuotas. El ususario ingresa l valor del producto, el descuento a aplicar y cantidad de cuotas. Se devuelven:
//Valor del monto ingresado y descuento.
//Subtotal del producto con descuento aplicado.
//Valor del producto con descuento aplicado más IVA.
//Valor de la cuota de acuerdo a la cantidad de cuotas elegidas por el usuario. 

//Desarrollo:

//Funciones:

function descuentoAplicado(){
    let totalParcial = precioProducto - (precioProducto * descuentoProducto) / 100
    return totalParcial
}

function descuentoFinal(){
    let totalPagar = (totalParcial + (totalParcial * iva)).toFixed(2);
    return totalPagar
}

function cuotas(){
    let cuota = (totalPagar / cantCuotas).toFixed(2);
    return cuota;
   }

//Variables y llamado de funciones:  
 
let precioProducto = parseInt(prompt("Ingrese el monto del producto"))
let descuentoProducto = parseInt(prompt("Ingrese el porcentaje del descuento a aplicar"))
let cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"))
console.log(`El precio del producto es $ ${precioProducto} y el descuento a aplicar es ${descuentoProducto} %`)
const iva = 0.21
let totalParcial = descuentoAplicado();
let totalPagar = descuentoFinal()
let cuota = cuotas();
console.log(`El valor del producto con descuento y sin iva es $${totalParcial}`)
console.log(`El descuento aplicado es $ ${totalParcial} y debe abonar $${totalPagar} con iva incluido.`)
console.log(`Puede comprar el producto en ${cantCuotas} cuotas de  $${cuota}`)