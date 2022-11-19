function validateCadastro() {
    usuario = document.getElementById("usuario")
    senha = document.getElementById("senha")
    confirmaSenha = document.getElementById("confirmaSenha")

    if (!usuario.value) alert("Usuário em branco. Informe um usuário")
    else if (!senha.value) alert("Senha em branco. Informe uma senha")
    else if (!confirmaSenha.value) alert("Confirmar senha em branco. Informe uma senha")
    else if (confirmaSenha.value !== senha.value) alert("Senhas diferentes. Verifique")
    else recordNewUser(usuario.value, senha.value)
}

function recordNewUser(usuario, senha) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, usuario, senha))
        .catch(err => alert("Problema na leitura do JSON!" + err))
}

function checkUserCadastro(content, user, password) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user === usuario) && (content.usuarios[i].pwd === senha)) {
            achouUser = true;
            break;
        }
    }

    if (achouUser) alert("Esse usuário já existe! Tente outro usuário")
    else {
        document.getElementsByTagName("form")[0].submit()
    }
}