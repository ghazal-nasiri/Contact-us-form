const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const enquiry = document.getElementById("enquiry");
const request = document.getElementById("request");
const queryGroup = document.getElementById("query-group");
const inputs = document.querySelectorAll("input");
const showSuccessMessage = document.querySelector(".showSuccesMessage");

form.addEventListener("submit", e => {
    e.preventDefault();
    validation();
})

 const showSuccessMsg = () => {
    const countInput = document.querySelectorAll(".input-group").length;
    const countValidInput = document.querySelectorAll(".valid").length;
    if (countInput == countValidInput) {
        form.reset();
        showSuccessMessage.classList.add("open");
    }
    setTimeout(() => {
            showSuccessMessage.classList.remove("open")
    }, 3500);

}


const isEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const showError = (element, message) => {
    let input = null;
    if (element.id == "consent") {
        input = element.parentElement.parentElement;
    }
    else {
        input = element.parentElement;
    }
    input.classList.remove("valid");
    input.classList.add("error");
    const errorMessage = input.querySelector(".error-message");
    errorMessage.innerText = message;
}

const valid = element => {
    let input = null;
    if (element.id == "consent") {
        input = element.parentElement.parentElement;
    }
    else {
        input = element.parentElement;
    }
    input.classList.remove("error");
    input.classList.add("valid");
}


const validation = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    if (firstNameValue == "") {
        showError(firstName, "This field is required")
    } else {
        valid(firstName);
    }
    if (lastNameValue == "") {
        showError(lastName, "This field is required")
    } else {
        valid(lastName);
    }
    if (emailValue == "") {
        showError(email, "This field is required")
    }
    else if (!isEmail(email.value)) {
        showError(email, "Please enter a valid email address")
    } else {
        valid(email);
    }
    if (messageValue == "") {
        showError(message, "This field is required")
    } else {
        valid(message);
    }
    if (!consent.checked) {
        showError(consent, "To submit this form, please consent to being contacted")
    } else {
        valid(consent);
    }
    if (!request.checked && !enquiry.checked) {
        showError(queryGroup, "Please select a query type")
    } else {
        valid(queryGroup);
    }
    showSuccessMsg();
}
