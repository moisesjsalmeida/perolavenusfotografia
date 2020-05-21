const gallery = document.querySelector("#gallery");
makeImgTags();
const images = document.querySelectorAll('[data-src]');
loadFirst();

// Load lightbox effect
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// Carregar 8 primeiras fotos
function loadFirst() {
    for (let i = 0; i < 8; i++) {
        preloadImage(images[i]);
    }
}

// Intersection Observer
const imgObserverOptions = {
    rootMargin: "-150px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            entry.target.classList.add("appear");
            imgObserver.unobserve(entry.target);
        }
    })
}, imgObserverOptions);

// Observe images only after the page is loaded
observeImages();
function observeImages() {
    images.forEach(image => {
        imgObserver.observe(image);
    });
}

function makeImgTags() {
    photos.forEach(pic => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("img");
        let newA = document.createElement("a");
        newA.setAttribute("href", "/media/" + pic);
        newA.setAttribute("data-toggle", "lightbox");
        newA.setAttribute("data-gallery", "portfolio");
        let newImg = document.createElement("img");
        newImg.setAttribute("data-src", "/media/" + pic);
        newImg.setAttribute("class", "animated");

        newA.appendChild(newImg);
        newDiv.appendChild(newA);
        gallery.appendChild(newDiv);
    });
};

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
};