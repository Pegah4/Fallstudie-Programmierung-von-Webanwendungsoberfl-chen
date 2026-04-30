function submitForm() {

  let type = document.getElementById("type").value;
  let plz = document.getElementById("plz").value;
  let address = document.getElementById("address").value;
  let cloth = document.getElementById("cloth").value;
  let region = document.getElementById("region").value;

  // اگر Abholung بود → PLZ چک کن
  if (type === "abholung") {
    if (plz.substring(0,2) !== "12") {
      alert("PLZ zu weit entfernt!");
      return;
    }
  }

  // ❗ مهم: صفحه نهایی (Summary)
  document.body.innerHTML = `
    <h2>Registrierung erfolgreich!</h2>
    <p><b>Art:</b> ${type}</p>
    <p><b>Adresse:</b> ${address}</p>
    <p><b>PLZ:</b> ${plz}</p>
    <p><b>Kleidung:</b> ${cloth}</p>
    <p><b>Krisengebiet:</b> ${region}</p>
  `;
}
