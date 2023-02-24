document.addEventListener("DOMContentLoaded", (e) => {
    let thisthing = JSON.parse(localStorage.getItem("userInfo"));
    let container = document.querySelector(".container");
    container.innerHTML += " " + thisthing["firstname"];
});
