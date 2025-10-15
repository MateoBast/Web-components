function main() {
  const HeaderContenedor = document.querySelector(".header");
  header(HeaderContenedor);
  const headerMobileContenedor = document.querySelector(".header-mobile");
  headerMobile(headerMobileContenedor);
  const otroContenedor = document.querySelector(".background-contenedor");
  backGround(otroContenedor);
  const cardContenedor = document.querySelector(".card-contenedor");
  card(cardContenedor);

  const botoncontenedor = document.querySelector(".boton-contenedor");
  boton(botoncontenedor);
  const pieMobileContendor = document.querySelector(".pie-mobile");
  footerMobile(pieMobileContendor);
  const pieContenedor = document.querySelector(".pie");
  footer(pieContenedor);
}
main();
