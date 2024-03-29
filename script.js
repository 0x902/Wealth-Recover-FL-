const mobileMenuEl = document.getElementById("mobile-menu");
const mobileMenuLinks = mobileMenuEl.querySelectorAll("a");

const prevTestimonialBtn = document.querySelector(".prev-testimonial-btn");
const nextTestimonialBtn = document.querySelector(".next-testimonial-btn");

let menuVisible = false;
function toggleMenu() {
    if (menuVisible) {
        mobileMenuEl.style.transform = "translateX(120%)";
        menuVisible = false;
    } else {
        mobileMenuEl.style.transform = "translateX(0%)";
        mobileMenuEl.style.opacity = "1";
        menuVisible = true;
    }
}

mobileMenuLinks.forEach((link) => link.addEventListener("click", toggleMenu));

const testimonials = [
    {
        user: "Lien Hart",
        review: "Helped locate assets I didn't even know existed and handled the entire process seamlessly. Highly recommend their services!",
        image: "user-1.png",
    },
    {
        user: "Bejoy Hamza",
        review: "I was amazed by how quickly they recovered my unclaimed assets. The team was incredibly thorough and kept me informed throughout the entire process.",
        image: "user-2.png",
    },
    {
        user: "Lisa S.",
        review: "Impressed by the professionalism and efficiency of. They handled my case with care and precision, and I was delighted with the results. Don't hesitate to trust them with your asset recovery needs!",
        image: "user-3.png",
    },
    {
        user: "Michael W.",
        review: "A big thank you for their exceptional service. They made the asset recovery process effortless and kept me informed every step of the way. I highly recommend their services to anyone looking to reclaim their lost funds.",
        image: "user-4.png",
    },
];

const testimonialEl = document.querySelector(".testimonial");
const dotsContainer = document.querySelector(".dots");

const userNameEl = document.getElementById("testimonial-user");
const reviewEl = document.getElementById("testimonial-review");
const imageEl = document.getElementById("testimonial-image");

let current = 0;
let maxLength = testimonials.length;

function generateDots() {
    for (let i = 0; i < maxLength; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.id = `dot-${i}`;

        if (i == 0) {
            dot.classList.add("current");
        }
        dotsContainer.append(dot);
    }
}

function updateDot(id) {
    const dots = document.querySelectorAll(".dot");
    Array.from(dots).forEach((dot) => {
        dot.classList.remove("current");
    });

    document.getElementById(`dot-${id}`).classList.add("current");
}

function next() {
    if (current < maxLength - 1) {
        current++;
        displayTestimonial(current);
        updateDot(current);
    } else {
        current = -1;
        next();
    }
}

function prev() {
    if (current > 0) {
        current--;
        displayTestimonial(current);
        updateDot(current);
    } else {
        current = maxLength;
        prev();
    }
}

function displayTestimonial(current) {
    userNameEl.textContent = testimonials[current].user;
    reviewEl.textContent = testimonials[current].review;
    imageEl.src = `img/${testimonials[current].image}`;
}

prevTestimonialBtn.addEventListener("click", () => {
    prev();
});

nextTestimonialBtn.addEventListener("click", () => {
    next();
});

generateDots();
displayTestimonial(0);
