function header(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `    
    <img class="header__logo" src="./imagenes/logo.png" alt="">
    <div>
        <a class="texto__header" href="http://127.0.0.1:8080/portfolio.html">portafolio</a>
        <a class="texto__header" href="http://127.0.0.1:8080/servicios.html">servicios</a>
        <a class="texto__header" href="http://127.0.0.1:8080/contacto.html">contacto</a>
    </div>
  `;
  element.appendChild(componentEl);
  componentEl.classList.add("header__contenedor");
}
