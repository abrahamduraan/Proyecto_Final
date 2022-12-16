document.addEventListener("DOMContentLoaded", function(event) {
    var carrito = JSON.parse(localStorage.getItem("Carrito"));
    var sumar = document.getElementsByClassName("fa-circle-plus");
    var restar = document.getElementsByClassName("fa-circle-minus");
    var tablaCarrito = document.getElementById("tablaCarrito");
    var compraRealizada = document.getElementById("compraRealizada");

    if (carrito === null) {
        carrito = [];
    }
    
    compraRealizada.addEventListener('click', function (event) {
        localStorage.setItem("Carrito", []);
        alert('Compra Realizada');
    });
    
    for (i = 0; i < carrito.length; i++) {
        var element = document.createElement('tr');
        var name = document.createElement('td');
        var detalle = document.createElement('td');
        var precio = document.createElement('td');
        var cantidad = document.createElement('td');
        var sumaIcono = document.createElement('i');
        var restaIcono = document.createElement('i');
        var cantidadNumero = document.createElement('span');
        var total = document.createElement('td');
        
        name.innerHTML = carrito[i].nombre;
        detalle.innerHTML = carrito[i].detalle;
        precio.innerHTML = carrito[i].precio;
        sumaIcono.classList.add("fa-solid");
        sumaIcono.classList.add("fa-circle-plus");
        restaIcono.classList.add("fa-solid");
        restaIcono.classList.add("fa-circle-minus");
        cantidadNumero.classList.add("carritoCantidad");
        cantidadNumero.innerHTML = carrito[i].cantidad;
        cantidad.classList.add("modificarCantidad")
        cantidad.append(restaIcono);
        cantidad.append(cantidadNumero);
        cantidad.append(sumaIcono);
        total.innerHTML = actualizarTotal(carrito[i].cantidad, parseInt(carrito[i].precio.replace(' ', '').replace('$', '')));
        
        element.append(name);
        element.append(detalle);
        element.append(precio);
        element.append(cantidad);
        element.append(total);        
        
        console.log(element);
        tablaCarrito.append(element);        
    }
    
    for (i = 0; i < sumar.length; i++) {
        sumar[i].addEventListener('click', function (event) {
            var target = event.target;
            var container = target.closest('tr');
            var name = container.children[0].innerHTML;
            var parent = target.closest('.modificarCantidad');
            var children = parent.children;
            var cantidad =  parseInt(children[1].innerHTML);
            cantidad ++;
            children[1].innerHTML = cantidad;
            
            let articuloNombre = container.children[0].innerHTML;
            let articuloDetalle = container.children[1].innerHTML;
            let articuloPrecio = container.children[2].innerHTML.replace('&nbps;', ' ');
            let precioSinFormato = parseInt(articuloPrecio.replace(' ', '').replace('$', ''));
            let articuloTotal = actualizarTotal(cantidad, precioSinFormato);
            
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

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("Carrito", JSON.stringify(carrito));
            }
            
            container.children[4].innerHTML = '$' + articuloTotal;
        });
        
        restar[i].addEventListener('click', function (event) {
            var target = event.target;
            var container = target.closest('tr');
            var name = container.children[0].innerHTML;
            var parent = target.closest('.modificarCantidad');
            var children = parent.children;
            var cantidad =  parseInt(children[1].innerHTML);
            let articuloNombre = container.children[0].innerHTML;
            let articuloDetalle = container.children[1].innerHTML;
            let articuloPrecio = container.children[2].innerHTML.replace('&nbps;', ' ');
            let precioSinFormato = parseInt(articuloPrecio.replace(' ', '').replace('$', ''));
            let articuloTotal = 0;
            if (cantidad > 1) {
                if (carrito !== [] ) {
                    for (i = 0; i < carrito.length; i++) {
                        var acumulador = parseInt(carrito[i].cantidad);
                        if (articuloNombre == carrito[i].nombre) {
                            carrito[i].cantidad = acumulador - 1;
                            children[1].innerHTML = carrito[i].cantidad;
                            articuloTotal = actualizarTotal(carrito[i].cantidad, precioSinFormato);
                        }
                    }
                }
            }
            if (cantidad == 1) {
                for (i = 0; i < carrito.length; i++) {
                    var acumulador = parseInt(carrito[i].cantidad);
                    if (articuloNombre == carrito[i].nombre) {
                        carrito.splice(i, 1);
                    }
                }
                container.remove();
            }

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("Carrito", JSON.stringify(carrito));
            }
                        
            container.children[4].innerHTML = '$' + articuloTotal;
        });
    }
});

actualizarTotal = (cantidad, precio) => {
    return cantidad * precio;
}