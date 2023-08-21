// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.onload = () => {
          image.removeAttribute("data-src");
        };
        observer.unobserve(image);
      }
    });
  }, options);

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
});
