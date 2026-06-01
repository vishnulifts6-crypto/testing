// Mobile Menu
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// EmailJS Initialization
emailjs.init("YOUR_PUBLIC_KEY");

// Contact Form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector("button[type='submit']");

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = "Sending...";
        }

        emailjs.sendForm(
            "service_2iem6zo",
            "template_83r02b9",
            form
        )
        .then(() => {
            alert("Message Sent Successfully!");
            form.reset();

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
            }
        })
        .catch((error) => {
            console.error(error);

            alert("Failed to Send Message!");

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
            }
        });
    });
}