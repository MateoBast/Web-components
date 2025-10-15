function headerMobile(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `    
    <img class="header-mobile__logo" src="./imagenes/logo.png" alt="Logo">
    <button class="menu-icon" id="menuToggle">
      <img class="opciones" src="./imagenes/menu-svgrepo-com 1.png" alt="Menú">
    </button>
  `;
  element.appendChild(componentEl);
  componentEl.classList.add("header-mobile__contenedor");
}
