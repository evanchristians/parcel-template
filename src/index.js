import { submitContactForm } from "./utils/submitContactForm";

const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");

pageLinks.forEach((pageLink) => {
    pageLink.addEventListener("click", (event) => {
        event.preventDefault();

        pageLinks.forEach((pageLink) => pageLink.classList.remove("active"));

        pageLink.classList.add("active");

        pages.forEach((page) => page.classList.remove("active"));

        document
            .getElementById(pageLink.dataset.target)
            .classList.add("active");
    });
});

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-intersecting");
        } else {
            entry.target.classList.remove("is-intersecting");
        }
    });
};

const observer = new IntersectionObserver(callback, {
    root: document.querySelector("body"),
    threshold: 1.0,
});

const observables = document.querySelectorAll("[data-scroll]");

observables.forEach((observable) => observer.observe(observable));

const form = document.getElementById("contact-form");

form.addEventListener("submit", submitContactForm);

if (module.hot) {
    module.hot.accept();
}
