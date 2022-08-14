let input1 = document.getElementById("unitario");
let input2 = document.getElementById("nombre");
let btnIngresar = document.getElementById("btnIngresar");
let btnTotal = document.getElementById("btnTotal");
let btnDescuento = document.getElementById("btnDescuento");
let lista = document.getElementById("lista");
let precioTotal: number = 0;
let arrProducto: number[] = [];
let arrNombre: string[] = [];

function agregarProductos(): number[] {
  let producto = Number(input1.value);
  let nombreProducto = input2?.value;
  arrNombre.push(nombreProducto);
  arrProducto.push(producto);

  lista?.innerHTML += `<li>${nombreProducto} :$ ${producto}</li> `;
  input1.value = " ";
  input2.value = " ";
}

btnIngresar?.addEventListener("click", agregarProductos);

function sumarTotal(): number {
  for (let i: number = 0; i < arrProducto.length; i++) {
    precioTotal += arrProducto[i];
  }

  lista?.innerHTML += `El total de la compra es $ ${precioTotal.toString()} `;
}

btnTotal?.addEventListener("click", sumarTotal);

function calcularDescuento(): number {
  if (precioTotal > 2500) {
    let totalConDescuento: number = precioTotal - precioTotal * 0.1;
    descuento.innerHTML += `Tiene un descuento del 10%  su total es $ ${totalConDescuento}`;
  } else {
    descuento.innerHTML += `Con su compra mayor a $2500 puede acceder a un descuento`;
  }
}

btnDescuento?.addEventListener("click", calcularDescuento);
