function Checker() {
    var username = document.getElementById("username").value

    var pass = document.getElementById("pass").value

    if (username === "axmerov" && pass == 1234) {
        document.getElementById("tagP").innerHTML = "Вход выполнен!"
        document.getElementById("tagP").style.color = "green";
    }
    if (username === "") {
        document.getElementById("tagP").innerHTML = "Логин не может быть пустым!"
        document.getElementById("tagP").style.color = "red"
    }
    else {
        document.getElementById("tagP").innerHTML = "Неправильный логин или пароль!"
        document.getElementById("tagP").style.color = "red"
    }


}