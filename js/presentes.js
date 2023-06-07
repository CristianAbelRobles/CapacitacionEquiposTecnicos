let listadoBox = document.getElementById("listado-box");

const mostrarTabla = async () => {
    try{
        let response = await fetch("../data/agentes.json");
        let agentes = await response.json();

        agentes.forEach(agente => {
            let presente = `<i class="text-success bi bi-check-circle-fill"></i>`;
            let ausente = `<i class="text-danger bi bi-x-circle-fill"></i>`;

            let msjClase195 = agente.clase195 === true ? presente : ausente;
            let msjClase235 = agente.clase235 === true ? presente : ausente;
            let msjClase315 = agente.clase315 === true ? presente : ausente;
            let msjClase26 = agente.clase26 === true ? presente : ausente;
            let msjClase56 = agente.clase56 === true ? presente : ausente;
            let msjClase76 = agente.clase76 === true ? presente : ausente;
            let msjClase96 = agente.clase96 === true ? presente : ausente;
            let msjClase126 = agente.clase126 === true ? presente : ausente;
            let msjClase146 = agente.clase146 === true ? presente : ausente;
            let msjClase166 = agente.clase166 === true ? presente : ausente;
            let msjClase216 = agente.clase216 === true ? presente : ausente;
            let msjClase236 = agente.clase236 === true ? presente : ausente;
            let msjClase276 = agente.clase276 === true ? presente : ausente;
            let msjClase306 = agente.clase306 === true ? presente : ausente;
            let msjClase57 = agente.clase57 === true ? presente : ausente;
            let msjClase77 = agente.clase77 === true ? presente : ausente;
            
            const tr = document.createElement('tr');
            const contentAgentes = `
                    <td>${agente.dependencia}</td>
                    <td>${agente.nombre}</td>
                    <td>${agente.apellido}</td>
                    <td>${msjClase195}</td>
                    <td>${msjClase235}</td>
                    <td>${msjClase315}</td>
                    <td>${msjClase26}</td>
                    <td>${msjClase56}</td>
                    <td>${msjClase76}</td>
                    <td>${msjClase96}</td>
                    <td>${msjClase126}</td>
                    <td>${msjClase146}</td>
                    <td>${msjClase166}</td>
                    <td>${msjClase216}</td>
                    <td>${msjClase236}</td>
                    <td>${msjClase276}</td>
                    <td>${msjClase306}</td>
                    <td>${msjClase57}</td>
                    <td>${msjClase77}</td>
                `
            tr.innerHTML = contentAgentes;
            listadoBox.append(tr);
        })
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('load', function () {
    mostrarTabla();
});