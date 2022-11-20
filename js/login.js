function validateLogin() {
    var user = document.getElementById("user")
    var pwd = document.getElementById("pwd")

    if (!user.value) {
        alert("Usuário em branco!");
    } else if (!pwd.value) {
        alert("Senha em branco!");
    } else processLogin(user.value, pwd.value);
}

function processLogin(user, pwd) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, user, pwd))
        .catch(err => alert("Problema na leitura do JSON!"))
}

function checkUserLogin(content, user, pwd) {
    var achouUsario = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user === user) && (content.usuarios[i].pwd === pwd)) {
            achouUsuario = true;
            break;
        }
    }
    if (achouUsuario) alert("Usuário existente")
    else alert("Usuário inexistente")
}