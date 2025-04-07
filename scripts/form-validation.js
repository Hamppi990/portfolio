document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageEl = document.getElementById("form-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Estetään oletuslähetys

    const firstname = form.firstname.value.trim();
    const lastname = form.lastname.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.website.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (honeypot !== "") {
      messageEl.textContent = "Robotit ei kiitos.";
      return;
    }
    // Validointi
    if (firstname.length < 2 || firstname.length > 50) {
      return (messageEl.textContent = "Etunimen pitää olla 2–50 merkkiä.");
    }
    if (lastname.length < 2 || lastname.length > 50) {
      return (messageEl.textContent = "Sukunimen pitää olla 2–50 merkkiä.");
    }
    if (!emailRegex.test(email)) {
      return (messageEl.textContent = "Anna kelvollinen sähköposti.");
    }
    if (subject.length < 3 || subject.length > 100) {
      return (messageEl.textContent = "Aiheen pitää olla 3–100 merkkiä.");
    }
    if (message.length < 10 || message.length > 2000) {
      return (messageEl.textContent = "Viestin pitää olla 10–2000 merkkiä.");
    }

    // Näytä latausviesti
    messageEl.style.color = "blue";
    messageEl.textContent = "Lähetetään...";

    try {
      const formData = new FormData(form);
      const response = await fetch("send_email.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (response.ok) {
        messageEl.style.color = "green";
        messageEl.textContent = "Viesti lähetetty onnistuneesti!";
        form.reset();
      } else {
        messageEl.style.color = "red";
        messageEl.textContent = "Virhe lähetyksessä. Yritä uudelleen.";
      }

      console.log("Serverin vastaus:", result); // Debugiksi
    } catch (error) {
      messageEl.style.color = "red";
      messageEl.textContent = "Jokin meni pieleen. 😢";
      console.error("Virhe:", error);
    }
  });
});
