import React from 'react';

const Producto = ({producto, carrito, setCarrito, productos}) => {
    
    const { nombre, precio, id } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        setCarrito([
            ...carrito,
            producto
        ]);
    } 

    //elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //colocar productos en el state
        setCarrito(productos);
    }
    
    return (   
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
           
            {productos
                ?
                (
                    <button
                    type="button"
                    onClick={()=> seleccionarProducto(id)}
                    >Comprar</button>
                )
                :
                (
                    <button
                    type="button"
                    onClick={()=> eliminarProducto(id)}
                    >Eliminar</button>
                )
            }
        </div>
    
    );
}
 
export default Producto;