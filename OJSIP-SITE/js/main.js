// Année automatique dans le pied de page
document.getElementById("y").textContent = new Date().getFullYear();

// Formulaire de contact : ouvre l'application e-mail du visiteur
document.getElementById("f").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var d = new FormData(this);

  var sujet = "Message via le site OJSIP";
  var corps = d.get("m") + "\n\n" + d.get("n") + " - " + d.get("e");

  location.href =
    "mailto:osjippodorenavant@gmail.com" +
    "?subject=" + encodeURIComponent(sujet) +
    "&body=" + encodeURIComponent(corps);
});
