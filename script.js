// Fonction pour calculer l'âge à partir de la date de naissance
function calculerAge(dateNaissance) {
    const aujourdHui = new Date(); // Date actuelle
    const naissance = new Date(dateNaissance); // Convertir la date de naissance en objet Date
    let age = aujourdHui.getFullYear() - naissance.getFullYear(); // Calcul de l'âge en années

    // Vérifier si l'anniversaire n'est pas encore passé cette année
    const m = aujourdHui.getMonth() - naissance.getMonth(); // Différence des mois
    if (m < 0 || (m === 0 && aujourdHui.getDate() < naissance.getDate())) {
        age--; // Si l'anniversaire n'est pas encore passé, on retire 1
    }

    return age; // Retourne l'âge calculé
}

// Insérer l'âge calculé dans l'élément HTML avec l'id "age"
document.getElementById('age').textContent = calculerAge('2003-12-08') + " ans";


// Attendre que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form'); // Récupérer le formulaire
  const errorMsg = document.getElementById('error-msg'); // Récupérer l'élément d'erreur
  const successMsg = document.getElementById('success-msg'); // Récupérer l'élément de succès

  // Ajouter un événement lors de la soumission du formulaire
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page à l'envoi

    // Cacher les messages précédents
    errorMsg.style.display = "none";
    successMsg.style.display = "none";

    const formData = new FormData(form); // Créer un objet FormData à partir du formulaire

    // Envoyer les données avec fetch
    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(response => response.json()) // Transformer la réponse en JSON
    .then(result => {
      if (result.success) { // Si l'envoi est réussi
        form.reset(); // Vider les champs du formulaire
        successMsg.style.display = "block"; // Afficher le message de succès

        // Faire disparaître le message après 4 secondes
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 4000);
      } else { // Si l'envoi échoue côté serveur
        errorMsg.style.display = "block"; // Afficher le message d'erreur
        setTimeout(() => {
          errorMsg.style.display = "none"; // Masquer après 4 secondes
        }, 4000);
      }
    })
    .catch(() => { // En cas d'erreur réseau ou autre
      errorMsg.style.display = "block"; // Afficher le message d'erreur
      setTimeout(() => {
        errorMsg.style.display = "none"; // Masquer après 4 secondes
      }, 4000);
    });
  });
});


// Code pour le menu (sidebar) toggle
const toggler = document.querySelector(".oussama .nav-toggler"); // Bouton pour ouvrir/fermer le menu
const sidebar = document.querySelector(".oussama"); // Sidebar/menu

// Ajouter un événement click sur le bouton
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active"); // Ajouter/enlever la classe "active" au bouton
  sidebar.classList.toggle("active"); // Ajouter/enlever la classe "active" à la sidebar pour l'ouvrir/fermer
});


