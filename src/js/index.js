import '../scss/main.scss';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

        var emailInput = document.getElementById('email').value;
        var passwordInput = document.getElementById('password').value;

        if (emailInput === 'admin@mail.com') {
            // Redirige al usuario admin a la página "menu-admin.html"
            window.location.href = 'menu-admin.html';
        } else if (emailInput === 'vendedor@mail.com') {
            // Redirige al usuario vendedor a la página "sale-menu.html"
            window.location.href = 'menu-sale.html';
        } else {
            // Muestra un alerta con un mensaje de error para otros usuarios
            alert('Usuario no válido');
        }
    });
});