document.addEventListener("DOMContentLoaded", (e) => {
    let container = document.querySelector(".container");
    container.innerHTML += " " + getCookie("firstname");
});
