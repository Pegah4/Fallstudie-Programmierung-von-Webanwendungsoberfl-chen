function submitForm() {

  let type = document.getElementById("type").value;
  let plz = document.getElementById("plz").value;
  let address = document.getElementById("address").value;
  let cloth = document.getElementById("cloth").value;
  let region = document.getElementById("region").value;

  if (type === "abholung") {
    if (plz.substring(0,2) !== "12") {
      alert("PLZ zu weit entfernt!");
      return;
    }
  }

  document.body.innerHTML = `
    <h2>Registrierung erfolgreich!</h2>
    <p><b>Art:</b> ${type}</p>
    <p><b>Adresse:</b> ${address}</p>
    <p><b>PLZ:</b> ${plz}</p>
    <p><b>Kleidung:</b> ${cloth}</p>
    <p><b>Krisengebiet:</b> ${region}</p>
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
