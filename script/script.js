window.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {

        const radios = document.querySelectorAll('input[type="radio"]');
        let selected = false;

        radios.forEach(function(radio) {
            if (radio.checked) {
                selected = true;
            }
        });

        if (!selected) {
            alert("Bitte wählen Sie eine Übergabeart!");
            return;
        }

        alert("Registrierung erfolgreich! Vielen Dank für Ihre Spende.");
    });

});
