function submitForm() {

  let type = document.getElementById("type").value;
  let plz = document.getElementById("plz").value;
  let address = document.getElementById("address").value;
  let cloth = document.getElementById("cloth").value;
  let region = document.getElementById("region").value;
  if(cloth === "" || region === "") {
   alert("Bitte alle Felder ausfüllen!");
   return;
}
if(!isNaN(cloth)) {
   alert("Kleidung darf nicht nur Zahlen enthalten!");
   return;
}
  if (type === "abholung") {
    if (plz.substring(0,2) !== "12") {
      alert("PLZ zu weit entfernt!");
      return;
    }
  }
const now = new Date();
const datum = now.toLocaleDateString("de-DE");
const uhrzeit = now.toLocaleTimeString("de-DE");
  document.body.innerHTML = `
    <h2>Registrierung erfolgreich!</h2>
    <p><b>Art:</b> ${type}</p>
    <p><b>Adresse:</b> ${address}</p>
    <p><b>PLZ:</b> ${plz}</p>
    <p><b>Kleidung:</b> ${cloth}</p>
    <p><b>Krisengebiet:</b> ${region}</p>
    <p><b>Datum:</b> ${datum}</p>
    <p><b>Uhrzeit:</b> ${uhrzeit}</p>
  `;
}
document.getElementById("type").addEventListener("change", function () {
  let type = document.getElementById("type").value;

  if (type === "abholung") {
    document.getElementById("addressBox").style.display = "block";
    document.getElementById("plzBox").style.display = "block";
  } else {
    document.getElementById("addressBox").style.display = "none";
    document.getElementById("plzBox").style.display = "none";
  }
});
