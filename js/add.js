function validarFormulario() {
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    const envioExitoso = true; // Cambia a false si el envío falla

    if (envioExitoso) {
        alert("¡Hurra! Iré por batatas mientras tanto.");
    }

    return envioExitoso; // Retorna el estado de envioExitoso
}
