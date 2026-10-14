const form = document.querySelector("#formulaire-contact");
const offerSelect = document.querySelector("#offre");
const formStatus = document.querySelector("#statut-formulaire");

const requestedOffer = new URLSearchParams(window.location.search).get("offre");
if (requestedOffer && offerSelect?.querySelector(`option[value="${CSS.escape(requestedOffer)}"]`)) {
  offerSelect.value = requestedOffer;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const selectedText = offerSelect.options[offerSelect.selectedIndex]?.text || "À préciser";
  const values = (name) => data.getAll(name).join(", ") || "Non précisé";
  const lines = [
    "Bonjour,",
    "",
    "Je souhaite échanger au sujet de mon besoin.",
    "",
    `Entreprise : ${data.get("entreprise")}`,
    `E-mail de réponse : ${data.get("email")}`,
    `Métier / activité : ${data.get("metier")}`,
    `Offre envisagée : ${selectedText}`,
    `Type d’affaire : ${data.get("type_marche") || "Non précisé"}`,
    `Montant approximatif : ${data.get("montant") || "Non précisé"}`,
    `Date limite de remise : ${data.get("date_limite") || "Non précisée"}`,
    "",
    "Méthode actuelle :",
    String(data.get("outil_actuel")),
    "",
    "Difficulté à résoudre :",
    String(data.get("difficulte")),
    "",
    `Coûts déjà identifiés : ${values("couts")}`,
    `Résultats attendus : ${values("resultats")}`,
    `Pièces prêtes : ${data.get("exemple") || "Non précisé"}`,
    `Délai souhaité : ${data.get("delai") || "Non précisé"}`,
    "",
    "Précision complémentaire :",
    String(data.get("precision") || "Aucune"),
    "",
    "Cordialement"
  ];

  const subject = `Demande Bid Consulting : ${selectedText}`;
  const mailto = `mailto:contact@bid-consulting.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  formStatus.textContent = "Votre messagerie va s’ouvrir avec le message préparé. Vérifiez-le puis cliquez sur Envoyer.";
  window.location.href = mailto;
});
