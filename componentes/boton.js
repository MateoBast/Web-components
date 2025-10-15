function boton(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `

        <button class="boton">
        <i class="fas fa-paper-plane"></i> Enviar
        </button>
`;
  element.appendChild(componentEl);
  componentEl.classList.add("button");
}
