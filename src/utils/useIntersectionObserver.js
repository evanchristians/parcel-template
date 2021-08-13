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

export const useIntersectionObserver = () => {
    observables.forEach((observable) => observer.observe(observable));
};
