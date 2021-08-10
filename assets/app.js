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
