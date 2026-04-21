function jourTravaille(date) {

    const joursFeries2024 = [
        "2026-01-01",
        "2026-04-01",
        "2026-05-01",
        "2026-05-08",
        "2026-05-09",
        "2026-05-20",
        "2026-07-14",
        "2026-08-15",
        "2026-11-01",
        "2026-11-11",
        "2026-12-25"
    ];

    const jours = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ];

    const mois = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ];

    const jourNom = jours[date.getDay()];
    const jourNum = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();

    const dateStr = `${annee}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const phraseDate = `${jourNom} ${jourNum} ${moisNom} ${annee}`;

    // Jour férié
    if (joursFeries2024.includes(dateStr)) {
        console.log(`Le ${phraseDate} est un jour férié`);
    }

    // Week-end
    else if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, ${phraseDate} est un week-end`);
    }

    // Jour travaillé
    else {
        console.log(`Oui, ${phraseDate} est un jour travaillé`);
    }
}

jourTravaille(new Date(2026, 0, 1))
jourTravaille(new Date(2026, 3, 21))
jourTravaille(new Date(2026, 4, 19))