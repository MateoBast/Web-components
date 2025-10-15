function main() {
  const HeaderContenedor = document.querySelector(".encabezado");
  header(HeaderContenedor);
  const headerMobileContenedor = document.querySelector(".encabezado-mobile");
  headerMobile(headerMobileContenedor);
  const contenedorFootermobile = document.querySelector(
    ".footer-contenedor__mobile"
  );
  footerMobile(contenedorFootermobile);
  const pieContenedor = document.querySelector(".pie");
  footer(pieContenedor);
  const botoncontenedor = document.querySelector(".boton-contenedor");
  boton(botoncontenedor);
}
main();
