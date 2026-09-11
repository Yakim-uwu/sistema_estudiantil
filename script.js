function agregarEstudiante(){
    const nombre = document.getElementById("nombre").value.trim()
    const apellido = document.getElementById("apellido").value.trim()
    const promedio = parseFloat(document.getElementById("promedio").value)

    if (!nombre || !apellido) return alert("El nombre y apellido son obligatorios.")
    if (isNaN(promedio)||promedio < 1.0 || promedio > 7.0) return alert("Promedio entre 1.0 y 7.0")


    const estado = promedio >= 4.0? "Aprobado" : "Reprobado"
    const claseBadge = promedio >= 4.0? "aprobado" : "reprobado"
    const clasePromedio = promedio < 4.0? "nota-roja" : ""


    const tabla = document.getElementById("tablaEstudiantes")
    tabla.innerHTML += `<tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td class="${clasePromedio}">${promedio.toFixed(1)}</td>
            <td><span class="${claseBadge}">${estado}</span></td>
        </tr>
    `;
    document.getElementById("formEstudiante").reset();
}

