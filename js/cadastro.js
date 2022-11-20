function validateCadastro() {
    user = document.getElementById("user")
    pwd = document.getElementById("pwd")
    confPwd = document.getElementById("confPwd")

    if (!user.value) alert("Usuário em branco. Informe um usuário")
    else if (!pwd.value) alert("Senha em branco. Informe uma senha")
    else if (!confPwd.value) alert("Confirmar senha em branco. Confirme a senha")
    else if (confPwd.value !== pwd.value) alert("Senhas diferentes. Verifique")
    else recordNewUser(user.value, pwd.value)
}

function recordNewUser(user, pwd) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, user, pwd))
        .catch(err => alert("Problema na leitura do JSON!" + err))
}
function checkUserCadastro(content, user, pwd) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user === user) && (content.usuarios[i].pwd === pwd)) {
            achouUser = true;
            break;
        }
    }
    if (achouUser) alert("Esse usuário já existe! Tente outro usuário")
    else {
        document.getElementsByTagName("form")[0].submit()
    }
}