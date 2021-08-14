const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");

export const usePrimitiveSPRouter = () => {
    pageLinks.forEach((pageLink) => {
        pageLink.addEventListener("click", (event) => {
            event.preventDefault();

            pageLinks.forEach((pageLink) =>
                pageLink.classList.remove("active")
            );

            const targetLinks = document.querySelectorAll(
                `[data-target='${pageLink.dataset.target}']`
            );

            targetLinks.forEach((targetLink) => {
                targetLink.classList.add("active");
            });

            pages.forEach((page) => page.classList.remove("active"));

            document
                .getElementById(pageLink.dataset.target)
                .classList.add("active");
        });
    });
};
