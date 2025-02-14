const hambuger = document.getElementById('hamburger');
const navLinks =document.querySelector('.nav-links');


hambuger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Image Slider Logic
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto-change slides every 3 seconds
setInterval(nextSlide, 3000);

// Image Slider Logic 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto-change slides every 3 seconds
setInterval(nextSlide, 3000);

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});
