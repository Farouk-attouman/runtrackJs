// Récupérer le textarea
const keylogger = document.getElementById("keylogger");

// Écouter les événements de saisie
document.addEventListener("keypress", function(event) {
    // Vérifier si c'est une lettre (a-z ou A-Z)
    const key = event.key;
    if (/^[a-zA-Z]$/.test(key)) {
        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === keylogger) {
            keylogger.value += key + key;
        } else {
            // Sinon, ajouter la lettre une fois
            keylogger.value += key;
        }
    }
});
