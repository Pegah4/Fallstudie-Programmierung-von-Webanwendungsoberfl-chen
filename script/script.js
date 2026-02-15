document.querySelector("button").addEventListener("click", function() {

    const art = document.querySelector('input[name="art"]:checked');

    if (!art) {
        alert("Bitte wählen Sie eine Übergabeart!");
        return;
    }

    alert("Registrierung erfolgreich! Vielen Dank für Ihre Spende.");
});
