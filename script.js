function agregarEstudiante(){
    const nombre = document.getElementById("nombre").value.trim()
    const apellido = document.getElementById("apellido").value.trim()
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById("nota3").value)

    if (!nombre || !apellido) return alert("El nombre y apellido son obligatorios.")
    if ([nota1, nota2, nota3].some(n => isNaN(n) || n < 1.0 || n > 7.0)) return alert("Notas entre 1.0 y 7.0.");

    const promedio = parseFloat(((nota1*0.3)+(nota2*0.4)+(nota3*0.3)).toFixed(1))

    const estado = promedio >= 4.0? "Aprobado" : "Reprobado"
    const claseBadge = promedio >= 4.0? "aprobado" : "reprobado"
    const c1 = nota1 < 4.0? "nota-roja" : ""
    const c2 = nota2 < 4.0? "nota-roja" : ""
    const c3 = nota3 < 4.0? "nota-roja" : ""
    const cp = promedio < 4.0? "nota-roja" : ""


    document.getElementById("tablaEstudiantes").innerHTML += `
    <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td class="${c1}">${nota1.toFixed(1)}</td>
            <td class="${c2}">${nota2.toFixed(1)}</td>
            <td class="${c3}">${nota3.toFixed(1)}</td>
            <td class="${cp}">${promedio.toFixed(1)}</td>
            <td><span class="${claseBadge}">${estado}</span></td>
        </tr>
    `;
    document.getElementById("formEstudiante").reset();
}

