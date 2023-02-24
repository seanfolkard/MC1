document.addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#new-account");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("User submitted form \"new-account\"");
        const formElement = document.querySelector("#new-account");

        let formData = new FormData(formElement);
        for (let data of formData) {
            setCookie(data[0], data[1]);
            console.log("data[0]: " + data[0] + " -- data[1]: " + data[1]);
        }
        console.log("firstname: " + getCookie("firstname"));
        console.log(document.cookie);
    });
});
