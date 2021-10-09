const user = document.getElementById("user");
const password = document.getElementById("password")
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var querryStr = "http://localhost:3000/user/pw-byuid?uid=" + user.value;
    $.getJSON(querryStr, verify);
    sessionStorage.setItem("email", user.value);
})

function verify(data) {
    if (data[0].password === password.value) {
        alert("You have successfully logged in.")
        window.location.href ="main.html"
    } else {
        alert("User/Password not recognised")
    }
}