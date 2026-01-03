function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMsg");

    if (!name || !email || !message) {
        msg.textContent = "⚠️ Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.textContent = "✅ Message sent successfully!";
        msg.style.color = "green";
        this.reset();
    }
});

// Highlight nav link when clicked and keep it active while scrolling
const navLinks = document.querySelectorAll('nav a');

function setActiveLink(link) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}

// Set active on click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setActiveLink(link);
    });
});

// Update active link based on section visibility
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (link) setActiveLink(link);
        }
    });
}, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

// Initialize active link from hash or default to first
if (location.hash) {
    const initialLink = document.querySelector(`nav a[href="${location.hash}"]`);
    if (initialLink) setActiveLink(initialLink);
} else if (navLinks[0]) {
    setActiveLink(navLinks[0]);
}