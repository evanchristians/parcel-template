import { submitContactForm } from "./utils/submitContactForm";
import { useIntersectionObserver } from "./utils/useIntersectionObserver";
import { usePrimitiveSPRouter } from "./utils/usePrimitiveSPRouter";
import { useMenuToggle } from "./utils/useMenuToggle";

if (module.hot) {
    module.hot.accept();
}

useIntersectionObserver();
usePrimitiveSPRouter();
useMenuToggle();

document
    .getElementById("contact-form")
    .addEventListener("submit", submitContactForm);
