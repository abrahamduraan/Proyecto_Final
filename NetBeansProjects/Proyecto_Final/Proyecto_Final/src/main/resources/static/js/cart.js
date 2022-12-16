document.addEventListener("DOMContentLoaded", function(event) {
    var iconoCarrito = document.getElementById("cart");
    var carritoIndicador = document.getElementsByClassName("cartItems");
    var carrito = JSON.parse(localStorage.getItem("Carrito"));
    var agregar = document.getElementsByClassName("agregarCarrito");

    if (carrito === null) {
        carrito = [];
    }
    if (carrito.length >= 1) {
        carritoIndicador[0].style.display = "inline";
    }
    for (i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', function (event) {
            var target = event.target;
            var parent = target.closest('.card-body');
            var children = parent.children;
            var datosArticulo = [];
            let articuloNombre = children[0].innerHTML;
            let articuloDetalle = children[1].innerHTML;
            let articuloPrecio = children[2].innerHTML.replace('&nbps;', ' ').replace(',', '');

            if (carrito !== [] ) {
                let encontrado = false;
                for (i = 0; i < carrito.length; i++) {
                    var acumulador = parseInt(carrito[i].cantidad);
                    if (articuloNombre == carrito[i].nombre) {
                        carrito[i].cantidad = acumulador + 1;
                        encontrado = true;
                    }
                }
                if (!encontrado) {
                    datosArticulo = asignarDatos(articuloNombre, articuloDetalle, articuloPrecio, 1);
                    carrito.push(datosArticulo);
                }
            } else {
                datosArticulo = asignarDatos(articuloNombre, articuloDetalle, articuloPrecio, 1);
                carrito.push(datosArticulo);
            }
            
            if (carrito.length >= 1) {
                carritoIndicador[0].style.display = "inline";
            }

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("Carrito", JSON.stringify(carrito));
            }
        });
    }
});

asignarDatos = (articuloNombre, articuloDetalle, articuloPrecio, cantidad) => {
    datosArticulo = {
        'nombre': articuloNombre, 
        'detalle': articuloDetalle, 
        'precio': articuloPrecio,
        'cantidad': cantidad
    };
    return datosArticulo;
}