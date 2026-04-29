// Navbar scroll effect
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.7)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});


// Button click animation
let button = document.querySelector("#heading button");

button.addEventListener("click", function () {
    button.innerText = "Loading...";
    
    setTimeout(() => {
        button.innerText = "Explore Now";
    }, 1500);
});


// Card hover animation (extra smooth)
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});


// Scroll reveal animation
let boxes = document.querySelectorAll("#box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        let top = box.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
});