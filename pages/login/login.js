function login() {
    event.preventDefault(); // 

    // 
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // 
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // 
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // 
        alert('Inicio de sesión exitoso. Bienvenido ' + user.name);
        window.location.href = '/index.html'; // 
    } else {
        // 
        alert('Correo o contraseña incorrectos');
    }
}
