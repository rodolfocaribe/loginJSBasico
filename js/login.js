function validateLogin() {
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if (!usuario.value) {
        alert("Usuário em branco!");
    } else if (!senha.value) {
        alert("Senha em branco!");
    } else processLogin(usuario.value, senha.value);
}

function processLogin(usuario, senha) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, usuario, senha))
        .catch(err => alert("Problema na leitura do JSON!"))
}

function checkUserLogin(content, usuario, senha) {
    var achouUsario = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user === usuario) && (content.usuarios[i].pwd === senha)) {
            achouUsuario = true;
            break;
        }
    }

    if (achouUsuario) alert("Usuário existente")
    else alert("Usuário inexistente")
}