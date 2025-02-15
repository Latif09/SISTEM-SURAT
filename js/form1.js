const cardContainer = document.querySelector(".card-container");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let isDown = false;
let startX;
let scrollLeft;

// Event untuk geser manual (drag mouse)
cardContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener("mouseleave", () => {
    isDown = false;
});

cardContainer.addEventListener("mouseup", () => {
    isDown = false;
});

cardContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 2;
    cardContainer.scrollLeft = scrollLeft - walk;
});

// Untuk geser dengan touch screen
cardContainer.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener("touchend", () => {
    isDown = false;
});

cardContainer.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 2;
    cardContainer.scrollLeft = scrollLeft - walk;
});

// Event untuk klik tombol panah
rightArrow.addEventListener("click", () => {
    cardContainer.scrollLeft += 300; // Geser ke kanan
});

leftArrow.addEventListener("click", () => {
    cardContainer.scrollLeft -= 300; // Geser ke kiri
});
