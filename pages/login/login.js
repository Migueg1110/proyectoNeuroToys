function login() {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Recuperar los usuarios almacenados en localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar si existe un usuario con el mismo email y contraseña
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Si el usuario existe, crear una nueva clave en localStorage para el usuario logueado
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirigir a la página principal o de bienvenida
        alert('Inicio de sesión exitoso. Bienvenido ' + user.name);
        window.location.href = '/index.html'; // Cambia esto a la página que desees redirigir después del login
    } else {
        // Si no se encuentra el usuario, mostrar un error
        alert('Correo o contraseña incorrectos');
    }
}
