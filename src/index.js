import { submitContactForm } from "./utils/submitContactForm";
import { useIntersectionObserver } from "./utils/useIntersectionObserver";
import { usePrimitiveSPRouter } from "./utils/usePrimitiveSPRouter";

if (module.hot) {
    module.hot.accept();
}

useIntersectionObserver()
usePrimitiveSPRouter()

document.getElementById("contact-form").addEventListener("submit", submitContactForm);
