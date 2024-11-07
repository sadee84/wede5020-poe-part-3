document.addEventListener("DOMContentLoaded", function () {
    // DateStamp Feature
    const dateElement = document.createElement("div");
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    dateElement.textContent = `Today's date: ${currentDate}`;
    dateElement.style.textAlign = "center";
    dateElement.style.padding = "10px";
    dateElement.style.fontSize = "18px";
    document.body.prepend(dateElement);

    // Lightbox Feature
    const images = document.querySelectorAll("main img");
    const lightbox = document.createElement("div");
    const lightboxImage = document.createElement("img");

    // Styling the lightbox
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "1000";

    lightboxImage.style.maxWidth = "90%";
    lightboxImage.style.maxHeight = "90%";
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    // Event to open the lightbox
    images.forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    // Event to close the lightbox
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
