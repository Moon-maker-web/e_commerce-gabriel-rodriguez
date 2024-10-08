document.addEventListener('DOMContentLoaded', () => {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">CELLFLEX</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Inicio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Productos</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Sobre Nosotros</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Contacto</a>
                      </li>
                      <li class="nav-item">
                          <a id="cartIcon" class="nav-link" href="#">
                              <i class="bi bi-cart"></i>
                              <span id="cartCount">0</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  `;

  const header = document.querySelector('header');
  header.innerHTML = navbarHTML;

  // Aquí agregamos el event listener al carrito
  const cartIcon = document.getElementById('cartIcon');
  if (cartIcon) {
      cartIcon.addEventListener('click', () => {
          mostrarCarrito();
      });
  }
});