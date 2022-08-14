let producto = document.querySelector("#producto");
let precio = document.querySelector("#precio");
let btnAgregar = document.querySelector("#btnAgregar");
let btnTotal = document.querySelector("#total");
let lista = document.querySelector(".lista");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

const agregarProducto = () => {
  productos.push(`producto.value`);
  precios.push(`precio.value`);
  lista?.innerHTML += `<li>${producto.value} :$ ${precio.value}</li>`;
};

btnAgregar?.addEventListener("click", agregarProducto);

function sumaTotal(): void {
  for (let i: number = 0; i < precios.length; i++) {
    suma += precios[i];
  }
  lista?.innerHTML += `El total de la compra es $ ${suma.toString()} `;
}

btnTotal?.addEventListener("click", sumaTotal);
