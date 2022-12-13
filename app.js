const message = document.querySelector(".success_err_msg");
const submitBtn = document.querySelector(".submit_btn");
const errorIcon = document.querySelector(".error_icon");
const input = document.querySelector("#email");

// const form = document.querySelector("form");

// validate input
const validateEmail = () => {
    let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value != "" && input.value.match(validRegex)) {
        message.textContent = "Thanks for submitting the form.";
        errorIcon.classList.add("hidden");
    } else {
        errorIcon.classList.remove("hidden");
        message.textContent = "Enter a valid email address";
    }
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail();
});
