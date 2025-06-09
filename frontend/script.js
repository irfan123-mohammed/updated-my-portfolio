document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
      const message = this.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("All fields are required.");
        return;
      }

      try {
        const BACKEND_URL = "https://your-backend-url.onrender.com";
        const response = await fetch(`${BACKEND_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          alert("Thank you for contacting me! I’ll get back to you soon.");
          this.reset();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (err) {
        alert("Failed to connect to server.");
        console.error(err);
      }
    });
  }

  // Initialize Typed.js
  if (typeof Typed !== "undefined") {
    new Typed("#typing", {
      strings: ["Web Developer", "Frontend Enthusiast", "Tech Explorer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
  }
});
