const form = document.getElementById("register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nom = form.nom.value.trim();
  const prenom = form.prenom.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  
  // Valider les champs et envoyer les données d'enregistrement au serveur
});
