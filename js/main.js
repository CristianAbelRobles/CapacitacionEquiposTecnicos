const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill text-warning");
    document.querySelector("#dl-span").innerHTML = "Modo Claro"
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#dl-span").innerHTML = "Modo Oscuro"
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    temaOscuro() : temaClaro();
}