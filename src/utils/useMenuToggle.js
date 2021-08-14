export const useMenuToggle = () => {
    let isOpen = false;

    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-menu]");
    const menuOverlay = document.getElementById("menu-overlay");
    const logo = document.querySelector(".logo");

    const toggleElements = [toggle, menu, menuOverlay, logo];

    const mobileLinks = document.querySelectorAll("[data-mobile-page-link]");

    const handleToggle = () => {
        isOpen = !isOpen;

        if (isOpen) {
            toggleElements.forEach((toggleElement) => {
                toggleElement.setAttribute("data-open", "");
            });
        } else {
            toggleElements.forEach((toggleElement) => {
                toggleElement.removeAttribute("data-open");
            });
        }

        mobileLinks.forEach((mobileLink, key) => {
            if (isOpen) {
                mobileLink.style.transitionDuration = ".75s";
                mobileLink.style.transitionDelay = key * 200 + 100 + "ms";
            } else {
                mobileLink.style.transitionDuration = ".5s";
                mobileLink.style.transitionDelay = "0s, .5s";
            }
        });
    };

    toggle.addEventListener("click", handleToggle);

    mobileLinks.forEach((mobileLink) => {
        mobileLink.addEventListener("click", handleToggle);
    });
};
