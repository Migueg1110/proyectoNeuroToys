// Función para registrar un nuevo usuario y guardar en localStorage
function register() {
    event.preventDefault(); // Evitar que se recargue la página al hacer submit

    // Obtener los valores de los campos del formulario
    const fullName = document.querySelector('input[placeholder="Full name"]').value;
    const age = document.querySelector('input[placeholder="Age"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm password"]').value;

    // Verificación básica de contraseñas
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Crear objeto con los datos del nuevo usuario
    const newUser = {
        name: fullName,
        age: age,
        email: email,
        password: password
    };

    // Comprobar si ya existe una key 'users' en localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Agregar el nuevo usuario al array existente
    users.push(newUser);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Confirmación de registro exitoso
    alert('Usuario registrado exitosamente');

    // Limpiar los campos del formulario
    document.querySelector('input[placeholder="Full name"]').value = '';
    document.querySelector('input[placeholder="Age"]').value = '';
    document.querySelector('input[placeholder="Email"]').value = '';
    document.querySelector('input[placeholder="Password"]').value = '';
    document.querySelector('input[placeholder="Confirm password"]').value = '';
}
