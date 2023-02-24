document.addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#new-account");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("User submitted form \"new-account\"");
        const formElement = document.querySelector("#new-account");

        let formData = new FormData(formElement);
        const userInfo = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            contact: formData.get("contact"),
            dob: formData.get("dob"),
            gender: formData.get("gender"),
        };
        console.log(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        const info = localStorage.getItem("userInfo");
        console.log("info: ", JSON.parse(info));
    });
});
