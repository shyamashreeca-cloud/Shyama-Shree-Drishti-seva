// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.textContent =

        navMenu.classList.contains("active") ? "✕" : "☰";

});

// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

// ================= FAQ =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// ================= FOOTER YEAR =================

document.getElementById("year").textContent =

    new Date().getFullYear();

// ================= IMAGE FALLBACK =================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.background =

            "linear-gradient(135deg, #17483f, #d6a84f)";

        img.removeAttribute("src");

        img.alt = "Shyama Shree Drishti Seva";

    });

});

// ================= HEADER SHADOW =================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 30) {

        header.style.boxShadow =

            "0 8px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});