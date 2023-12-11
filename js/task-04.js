const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        email === "" ? form.elements.email.focus() : form.elements.password.focus();
        return alert("All form fields must be filled in");
    }

    const obj = {
        email,
        password,
    };

    form.reset();

    console.log(obj);
}
