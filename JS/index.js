document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();
    var user = document.getElementById("user").value;
    localStorage.setItem("user", user);
    window.location.replace('main.html');
});
