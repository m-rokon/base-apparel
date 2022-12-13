const message = document.querySelector(".success_err_msg");
const submitBtn = document.querySelector(".submit_btn");
const errorIcon = document.querySelector(".error_icon");
const input = document.querySelector("#email");

// validate input
const validateEmail = () => {
    const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.addEventListener("keyup", () => {
        if (input.value === "") {
            message.textContent = "";
            errorIcon.classList.add("hidden");
        }
    });
    if (input.value != "" && input.value.match(validRegex)) {
        message.textContent = "Thanks for submitting the form.";
        errorIcon.classList.add("hidden");
        setTimeout(() => {
            message.textContent = "";
            input.value = "";
        }, 2000);
    } else {
        errorIcon.classList.remove("hidden");
        message.textContent = "Enter a valid email address";
    }
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail();
});
