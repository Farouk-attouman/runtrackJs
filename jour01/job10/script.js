function compterVoyelles(phrase) {

    const voyelles = "aeiouy";
    let compteur = 0;

    for (let i = 0; i < phrase.length; i++) {
        let lettre = phrase[i].toLowerCase();

        if (voyelles.includes(lettre)) {
            compteur++;
        }
    }

    console.log(`La phrase contient ${compteur} voyelles`);
}


compterVoyelles("Bonjour tout le monde");