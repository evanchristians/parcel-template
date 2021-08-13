const { ADMIN_EMAIL } = require("./constants");

const validate = (formProps) => {
    let errors = [];

    if (formProps.name.length == 0) {
        errors.push({
            field: "name",
            message: "This field is required",
        });
    }

    if (formProps.phone.length == 0) {
        errors.push({
            field: "phone",
            message: "This field is required",
        });
    } else if (
        !formProps.phone
            .replace(/[^\w\s]/gi, "")
            .replace(" ", "")
            .match(/^[0-9]{10}$/)
    ) {
        errors.push({
            field: "phone",
            message: "This phone number is invalid",
        });
    }

    if (formProps.message.length == 0) {
        errors.push({
            field: "message",
            message: "This field is required",
        });
    }

    if (formProps.email.length == 0) {
        errors.push({
            field: "email",
            message: "This field is required",
        });
    } else if (!formProps.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push({
            field: "email",
            message: "This email address is invalid",
        });
    }

    if (errors.length > 0)
        return {
            errors,
            success: false,
        };

    return {
        success: true,
    };
};

const clearErrors = (formProps) => {
    for (const [key, prop] of Object.entries(formProps)) {
        const errorField = document.getElementById(`${key}-error`);
        if (errorField) errorField.innerText = "";
    }

    document.getElementById("form-success").innerText = "";
};


export const submitContactForm = (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("contact-form"));
    const formProps = Object.fromEntries(formData);

    const { success, errors } = validate(formProps);

    clearErrors(formProps);

    if (errors) {
        errors.forEach((error) => {
            const errorField = document.getElementById(`${error.field}-error`);
            errorField.innerText = error.message;
        });
    }

    if (success) {
        const submitButton = document.getElementById(
            "contact-form-submit-button"
        );

        submitButton.disabled = true;

        const { success } = sendMail();

        if (success) {
            submitButton.classList.add("success");
            submitButton.innerText = "Sent!";
            document.getElementById("form-success").innerText =
                "Your message has been sent. Thanks for contacting us!";
        }
    } else {
        document.getElementById("form-success").innerText = "";
    }
};
