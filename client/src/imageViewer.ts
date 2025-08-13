window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        if (img.parentElement?.hasAttribute("href")) return
        img.addEventListener("mouseenter", () => {
            const viewer = document.createElement("div");
            viewer.classList.add("image-viewer");
            viewer.innerHTML = `<img src="${img.src}" />`;
            document.body.appendChild(viewer);

            const bounds = img.getBoundingClientRect();

            const mouseMoveListener = (event) => {
                // if mouse moves out of image bounds, remove viewer
                if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
                    const viewer = document.querySelector(".image-viewer");
                    if (viewer) {
                        document.removeEventListener("mousemove", mouseMoveListener);
                        viewer.remove();

                    }
                }
            }

            document.addEventListener("mousemove", mouseMoveListener);

        });




    });
})