document.getElementById('login').addEventListener('buta', function(event) {
    event.preventDefault();

    const username = document.getElementById('input').value;
    const password = document.getElementById('imput').value;

    if (username === 'joab' && password === '123') {
        alert('u gay');

    } else {
        document.getElementById('aviso').textContent = 'Usuário/Senha Invalidos';
    }
})