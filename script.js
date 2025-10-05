console.log("Bem-vindo(a) ao portfólio da Yasmin Pelagio 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("header h1");
  titulo.style.transition = "transform 1s ease-in-out";
  titulo.style.transform = "scale(1.2)";
  setTimeout(() => {
    titulo.style.transform = "scale(1)";
  }, 1000);
});
