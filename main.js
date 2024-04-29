// Vérifie si les champs de formulaire sont valides
function validateForm() {
  // Vérifie si le numéro de téléphone est valide
  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(document.getElementById("phone-number").value)) {
    alert("Le numéro de téléphone doit contenir 10 chiffres.");
    return false;
  }

  // Vérifie si le mot de passe est valide
  var passwordRegex = /^[a-zA-Z0-9]{6,}$/;
  if (!passwordRegex.test(document.getElementById("password").value)) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    return false;
  }

  // Les champs sont valides
  return true;
}

// Traite le formulaire de connexion
document.getElementById("login-form").addEventListener("submit", function(event) {
  // Vérifie si les champs sont valides
  if (!validateForm()) {
    event.preventDefault();
    return;
  }

  // Envoie le formulaire au serveur
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/login");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(new FormData(document.getElementById("login-form")));

  // Traite la réponse du serveur
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Connexion réussie
      alert("Connexion réussie !");
      window.location.href = "/";
    } else {
      // Connexion échouée
      alert("La connexion a échoué.");
    }
  };
});
