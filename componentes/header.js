function header(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `    
    <img class="header__logo" src="./imagenes/logo.png" alt="">
    <div>
        <a class="texto__header" href="portfolio.html">portafolio</a>
        <a class="texto__header" href="servicios.html">servicios</a>
        <a class="texto__header" href="contacto.html">contacto</a>
    </div>
  `;
  element.appendChild(componentEl);
  componentEl.classList.add("header__contenedor");
}
