// Definición de productos
const productos = [
    { id: 1, nombre: 'SAMSUNG S24 ultra', precio: 100, imagen: 'https://imgs.search.brave.com/mVkzE9BCZrO1LdwrCJMovGeF7jBcje2HJR_AvRlqTIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzLzYv/NC82NDFiMWRkNTA4/OTFmM2M1ZTQzNmI2/ZjBjZjAzZGEzMGVl/NGZlNThlLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg' },
    { id: 2, nombre: 'Xiaomi Mate XT', precio: 200, imagen: 'https://i.blogs.es/2338aa/huawei-mate-xt-ultimate-design-precio-mexico-caracteristicas-ficha-tecnica/1200_800.jpeg' },
    { id: 3, nombre: 'Apple Iphone 16', precio: 300, imagen: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L29KblRMQzVUOE4vMXpkMWtFcm9GcXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGRaWWVaY3B6VTFTdVNEWDF2OTRBYlY&traceId=1' },
];

// Carrito para almacenar productos seleccionados
const carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(productId) {
    const producto = productos.find(p => p.id === productId);
    if (producto) {
        carrito.push(producto);
        actualizarContadorCarrito();
        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}

// Función para actualizar el contador del carrito en la navbar
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = carrito.length; // Actualiza el contador en la navbar
}

// Función para mostrar el carrito en un modal
function mostrarCarrito() {
    const carritoLista = document.getElementById('carritoLista');
    carritoLista.innerHTML = ''; // Limpiar la lista

    carrito.forEach(producto => {
        const productoHTML = `<li class="list-group-item">${producto.nombre} - $${producto.precio}</li>`;
        carritoLista.insertAdjacentHTML('beforeend', productoHTML);
    });

    const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
    carritoModal.show(); // Muestra el modal del carrito
}

// Asegúrate de que el ícono del carrito está en el HTML
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cartIcon').addEventListener('click', mostrarCarrito);
});
