// Lager en bøker database
let db = firebase.database();
let boker0 = db.ref("bøkerMedGittPrimærnøkkel");

// Legger inn bøker hvor vi bestemmer primærnøkkelen
let bok0 = boker0.child("9788202185114");
bok0.set({
    tittel: "Ulysses",
    forfatter: "James Joyce",
    utgitt: 1922,
    forlag: "Cappelen Damm"
});

bok0 = boker0.child("978802325145");
bok0.set({
    tittel: "Sommer",
    forfatter: "J.M. Coetzee",
    utgitt: 2010,
    forlag: "Cappelen Damm"
});

bok0 = boker0.child("9788202309596");
bok0.set({
    tittel: "Hjulskift",
    forfatter: "Vigdis Hjorth",
    utgitt: 2007,
    forlag: "Cappelen Damm"
});
