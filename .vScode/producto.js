const producto = {
  titulo: "SAMSUNG S24 plus",
  detalle: "PRODUCTO GAMA ALTA ",
  precio: 299.99,
  stock: 100,
  imagen: "https://imgs.search.brave.com/mVkzE9BCZrO1LdwrCJMovGeF7jBcje2HJR_AvRlqTIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzLzYv/NC82NDFiMWRkNTA4/OTFmM2M1ZTQzNmI2/ZjBjZjAzZGEzMGVl/NGZlNThlLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg" 
};

// Crear una variable con etiquetas HTML que incluyan las propiedades del objeto
const etiquetas = `
  <h1>${producto.titulo}</h1>
  <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 200px; height: auto;">
  <p>${producto.detalle}</p>
  <p>Precio: $${producto.precio}</p>
  <p>Stock: ${producto.stock}</p>
`;

// Insertar el contenido en el main de producto.html
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main'); // Asegúrate de que este ID exista en producto.html
  main.innerHTML = etiquetas;
}); 
