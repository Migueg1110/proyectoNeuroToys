<script>
function cambiarContrasena() {
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Ejemplo de verificación: confirmar que la nueva contraseña y la confirmación coinciden
    if (newPassword !== confirmPassword) {
        message.textContent = "Las nuevas contraseñas no coinciden.";
        message.className = "error";
        return false;
    }

    // Ejemplo: Verificación mínima de longitud de la nueva contraseña
    if (newPassword.length < 8) {
        message.textContent = "La nueva contraseña debe tener al menos 8 caracteres.";
        message.className = "error";
        return false;
    }

    // Aquí puedes agregar lógica adicional para verificar la contraseña anterior y actualizarla en el servidor
    // Por ejemplo, una llamada AJAX al servidor para actualizar la contraseña

    message.textContent = "Contraseña cambiada exitosamente.";
    message.className = "success";
    return false; // Evita el envío del formulario, ya que se realiza en el cliente
}
</script>