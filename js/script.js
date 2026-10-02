const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Active page
const currentPage = window.location.pathname.split("/").pop();

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active-page");
    }

});


/* java script Validation */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const messageError =
            document.getElementById("messageError");

        const formSuccess =
            document.getElementById("formSuccess");


        // Clear old messages

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";


        let isValid = true;


        // Name

        if (name.length < 2) {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;
        }


        // Email

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            isValid = false;
        }


        // Message

        if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            isValid = false;
        }


        // Success

      const submitBtn =
    document.getElementById("submitBtn");

if (isValid) {

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(function () {

        submitBtn.textContent = "Message Sent ✓";

        formSuccess.textContent =
            "Thanks! Your message has been submitted.";

        contactForm.reset();

        setTimeout(function () {

            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;

        }, 2000);

    }, 1000);

}

    });

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// Close menu after clicking a link

const mobileLinks =
    document.querySelectorAll(".nav-links a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Close menu when clicking outside

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

    }

});



// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typingText");

const words = [
    "Web Developer",
    "Frontend Developer",
    "C++ Programmer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    }


    // Word completely typed
    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;
    }


    // Word completely deleted
    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

    }


    const speed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// SCROLL PROGRESS
// =========================

const scrollProgress =
    document.getElementById("scrollProgress");

window.addEventListener("scroll", function () {

    if (!scrollProgress) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight;

    const windowHeight =
        window.innerHeight;

    const scrollableHeight =
        documentHeight - windowHeight;

    const scrollPercentage =
        (scrollTop / scrollableHeight) * 100;

    scrollProgress.style.width =
        scrollPercentage + "%";

});

// =========================
// BACK TO TOP
// =========================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}