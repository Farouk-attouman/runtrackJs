function addOne() {
    const compteur = document.getElementById("compteur");
    let valeurActuelle = parseInt(compteur.textContent);
    compteur.textContent = valeurActuelle + 1;
}

document.getElementById("button").addEventListener("click", addOne);