const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstName + span.error")

email.addEventListener("input", () => {
    // if (email.validity.typeMismatch){
    //     email.setCustomValidity("Come on now, proper email, please!")
    //     email.reportValidity();
    // } else {
    //     email.setCustomValidity("");
    // }

    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";

    } else {
        showError();
    };
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Enter your email address.";
    };

    if (email.validity.typeMismatch) {
        emailError.textContent = "Enter a valid email address."
    }

    if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters. You entered ${email.value.length}`;
    }

    emailError.className = "error active";
};

// Second example: firstName
firstName.addEventListener("input", () => {
    if (!firstName.validity.valid) {
        showFirstNameError();
    } else {
        firstNameError.textContent = "";
        firstNameError.className = "error";
    }
});

function showFirstNameError() {
    if (firstName.validity.tooShort) {
        firstNameError.textContent = `Enter a name that's minimum ${firstName.minLength} characters.`
    };

    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "Enter your first name.";
    }

    firstNameError.className = "error active";
}