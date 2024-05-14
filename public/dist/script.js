"use strict";
const nom = "Dupont";
console.log(nom);
const age = 42;
console.log(age);
const isFrontend = true;
console.log(isFrontend);
const villeNatale = "Paris";
console.log(villeNatale);
const numberOfBrowser = 2;
console.log(numberOfBrowser);
//exercice 6
const nombre = [1, 2, 3, 4, 5];
console.log(nombre);
nombre.push(6);
nombre.slice(1);
console.log(nombre);
nombre.map(nombre => console.log(nombre));
//tuple
// Création du tuple pour représenter un livre
let livre = ["Le Seigneur des Anneaux", 1954, true];
// Affichage des détails du livre
console.log("Titre:", livre[0]);
console.log("Année de publication:", livre[1]);
console.log("Statut de disponibilité:", livre[2]);
// Modification du statut de disponibilité du livre
livre[2] = false;
// Ajout d'un commentaire comme quatrième élément du tuple
let tupleAvecCommentaire = [...livre, "Un commentaire sur ce livre"];
// Affichage du tuple mis à jour
console.log("Tuple mis à jour:", tupleAvecCommentaire);
//accéder à un élément hors des indices définis
console.log("Essai d'accéder à l'élément hors des indices définis:", tupleAvecCommentaire[3]);
//Solution
// Array
// let nombres: number[] = [1, 2, 3, 4];
// nombres.push(5);
// nombres.shift();
// nombres.forEach((value, index) => {
//     console.log(`Index ${index}: ${value}`);
// });
// Tuple
// let livre: [string, number, boolean] = ["Le Petit prince", 1943, true];
// livre[2] = false; // Modification du statut de disponibilité
// livre.push("Disponible à la bibliothèque");
// console.log(livre);
// try {
//     console.log(livre[10]); // Tentative d'accès à un index inexistant
// } catch (e) {
//     console.error("Erreur lors de l'accès à un index hors limites", e);
// }
//exercice 7
// Définition de l'énumération NiveauAcces avec des valeurs numériques explicites
var NiveauAcces;
(function (NiveauAcces) {
    NiveauAcces[NiveauAcces["None"] = 0] = "None";
    NiveauAcces[NiveauAcces["Read"] = 1] = "Read";
    NiveauAcces[NiveauAcces["Write"] = 2] = "Write";
    NiveauAcces[NiveauAcces["Admin"] = 3] = "Admin";
})(NiveauAcces || (NiveauAcces = {}));
// Déclaration d'une variable accesUtilisateur et assignation du niveau Write de l'enum NiveauAcces
let accesUtilisateur = NiveauAcces.Write;
// Écriture d'une fonction qui prend un paramètre de type NiveauAcces et affiche un message approprié selon le niveau d'accès
function afficherMessageAcces(niveau) {
    switch (niveau) {
        case NiveauAcces.None:
            console.log("Aucun accès");
            break;
        case NiveauAcces.Read:
            console.log("Accès en lecture seule");
            break;
        case NiveauAcces.Write:
            console.log("Accès en écriture");
            break;
        case NiveauAcces.Admin:
            console.log("Accès administrateur complet");
            break;
        default:
            console.log("Niveau d'accès inconnu");
            break;
    }
}
afficherMessageAcces(accesUtilisateur);
// Modification de l'énumération NiveauAcces pour utiliser des valeurs de type string
var NiveauAccesString;
(function (NiveauAccesString) {
    NiveauAccesString["None"] = "Aucun";
    NiveauAccesString["Read"] = "Lecture";
    NiveauAccesString["Write"] = "\u00C9criture";
    NiveauAccesString["Admin"] = "Administrateur";
})(NiveauAccesString || (NiveauAccesString = {}));
// Écriture d'une fonction qui prend un paramètre de type NiveauAccesString et affiche un message approprié selon le niveau d'accès
function afficherMessageAccesString(niveau) {
    switch (niveau) {
        case NiveauAccesString.None:
            console.log("Aucun accès");
            break;
        case NiveauAccesString.Read:
            console.log("Accès en lecture seule");
            break;
        case NiveauAccesString.Write:
            console.log("Accès en écriture");
            break;
        case NiveauAccesString.Admin:
            console.log("Accès administrateur complet");
            break;
        default:
            console.log("Niveau d'accès inconnu");
            break;
    }
}
afficherMessageAccesString(NiveauAccesString.Write);
//exercice 8
let etudiant = {
    nom: "Alice",
    age: 20,
    inscriptionActive: true
};
console.log(etudiant.nom + " a " + etudiant.age + " ans." + " Son inscription est " + (etudiant.inscriptionActive ? "active" : "inactive"));
// solution
// Déclaration de l'objet etudiant
// let etudiant : {
//     nom: string,
//     age: number,
//     inscriptionActive: boolean
// } = {
// nom: "Jean Dupont",
// age: 21,
// inscriptionActive: true
// };
// Modification de l'objet
// etudiant.age = 22;  // Changement d'âge
// etudiant.inscriptionActive = true;  // Confirmation de l'inscription active
// Affichage des informations de l'étudiant
// console.log(`Nom: ${etudiant.nom}`);
// console.log(`Âge: ${etudiant.age}`);
// console.log(`Inscription active: ${etudiant.inscriptionActive ? "Oui" : "Non"}`);
//Exercice 9
let donneesDynamiques = 42;
console.log(donneesDynamiques);
donneesDynamiques = {
    nombre: 42,
    nombreString: "quarante-deux"
};
console.log(donneesDynamiques);
console.log(donneesDynamiques.nombre);
console.log(donneesDynamiques.nombreString);
console.log(donneesDynamiques.ville);
function afficherMessage(message) {
    console.log(message);
}
afficherMessage("Ceci est un message de test.");
let info;
info = "Chaîne de caractères";
console.log(typeof info);
info = 123;
console.log(typeof info);
info = { key: "valeur" };
console.log(typeof info);
let infoString = info;
console.log(typeof infoString);
//solution
// let donneesDynamiques: any;
// donneesDynamiques = "Une chaîne";
// console.log(donneesDynamiques, typeof donneesDynamiques);
// donneesDynamiques = 42;
// console.log(donneesDynamiques, typeof donneesDynamiques);
// donneesDynamiques = { propriete: "valeur" };
// console.log(donneesDynamiques.propriete, typeof donneesDynamiques);
// function afficherMessage(message: string): void {
//     console.log(message);
// }
// afficherMessage("Hello TypeScript!");
// let info: unknown = "Test";
// console.log(info);
// info = 23;
// if (typeof info === "string") {
//     let messageText: string = info;
//     console.log(messageText);
// }
//exercice 10
const saluer = (nom) => `Bonjour, ${nom} !`;
console.log(saluer("Alice"));
const ajouter = (a, b) => a + b;
console.log(ajouter(3, 4));
const afficherDate = () => {
    const date = new Date();
    console.log(date.toLocaleDateString());
};
afficherDate();
const addBook = (listeLivres, livre) => {
    listeLivres.push(livre);
};
const addMember = (listeMembres, membre) => {
    listeMembres.push(membre);
};
const printBooks = (listeLivres) => {
    listeLivres.forEach((livre, index) => {
        console.log(`Livre ${index + 1}:`);
        console.log(`Titre: ${livre.title}`);
        console.log(`Auteur: ${livre.author}`);
        console.log(`ISBN: ${livre.isbn}`);
        console.log("-------------------------");
    });
};
const printMembers = (listeMembres) => {
    listeMembres.forEach((membre, index) => {
        console.log(`Membre ${index + 1}:`);
        console.log(`Nom: ${membre.name}`);
        console.log(`Identifiant de membre: ${membre.memberId}`);
        console.log(`Email: ${membre.email}`);
        console.log("-------------------------");
    });
};
const listeLivres = [];
const livre1 = { title: "Harry Potter", author: "J.K. Rowling", isbn: "9780545010221" };
const livre2 = { title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien", isbn: "9782070612842" };
addBook(listeLivres, livre1);
addBook(listeLivres, livre2);
printBooks(listeLivres);
const listeMembres = [];
const membre1 = { name: "Alice", memberId: 1, email: "alice@example.com" };
const membre2 = { name: "Bob", memberId: 2, email: "bob@example.com" };
addMember(listeMembres, membre1);
addMember(listeMembres, membre2);
printMembers(listeMembres);
const createLibraryManagement = () => {
    const livres = [];
    const membres = [];
    const resume = () => {
        console.log("Résumé des livres enregistrés :");
        printBooks();
        console.log("Résumé des membres enregistrés :");
        printMembers();
    };
    const addBook = (book) => {
        livres.push(book);
    };
    const addMember = (member) => {
        membres.push(member);
    };
    const printBooks = () => {
        livres.forEach((livre, index) => {
            console.log(`Livre ${index + 1}:`);
            console.log(`Titre: ${livre.title}`);
            console.log(`Auteur: ${livre.author}`);
            console.log(`ISBN: ${livre.isbn}`);
            console.log("-------------------------");
        });
    };
    const printMembers = () => {
        membres.forEach((membre, index) => {
            console.log(`Membre ${index + 1}:`);
            console.log(`Nom: ${membre.name}`);
            console.log(`Identifiant de membre: ${membre.memberId}`);
            console.log(`Email: ${membre.email}`);
            console.log("-------------------------");
        });
    };
    return Object.assign(resume, { addBook, addMember, printBooks, printMembers });
};
const libraryManagement = createLibraryManagement();
const livre3 = { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156013987" };
const membre3 = { name: "Claire", memberId: 3, email: "claire@example.com" };
libraryManagement.addBook(livre3);
libraryManagement.addMember(membre3);
libraryManagement();
//exercice 12
class Car {
    constructor(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    displayInfo() {
        console.log(`${this.year} ${this.brand} ${this.model}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2021);
car1.displayInfo();
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this._batteryCapacity = batteryCapacity;
    }
    displayInfo() {
        console.log(`${this.year} ${this.brand} ${this.model} - Battery Capacity: ${this._batteryCapacity} kWh`);
    }
}
const electricCar1 = new ElectricCar("Tesla", "Model S", 2022, 100);
electricCar1.displayInfo();
//exercice 13
//énoncé 1
function findMaxSimple(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let maxItem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (compare(arr[i], maxItem) > 0) {
            maxItem = arr[i];
        }
    }
    return maxItem;
}
function compare(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    return String(a).localeCompare(String(b));
}
console.log(findMaxSimple([3, 1, 7, 5]));
console.log(findMaxSimple(['apple', 'banana', 'orange']));
//énoncé 2
let array2 = [{
        strength: 10,
        name: "Alice",
        city: "Paris"
    },
    {
        strength: 20,
        name: "Bob"
    },
    {
        strength: 15,
        name: "Charlie"
    }];
const findMaxStrength = (arr) => {
    let value = 0;
    let indexElement = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.strength > value) {
            value = element.strength;
            indexElement = index;
        }
    }
    return arr[indexElement];
};
const maxStrength = findMaxStrength(array2);
console.log(maxStrength);
function displayAvengerInfo(character) {
    if ('team' in character) {
        console.log(`Avenger: ${character.name}, Power: ${character.power}, Team: ${character.team}`);
    }
    else {
        console.log(`Villain: ${character.name}, Evil Plan: ${character.evilPlan}, Motive: ${character.motive}`);
    }
}
function assembleTeam(characters) {
    const avengersTeam = [];
    for (const character of characters) {
        if ('team' in character && character.team === 'Avengers') {
            avengersTeam.push(character);
        }
    }
    return avengersTeam;
}
const ironMan = { name: 'Iron Man', power: 'Super suit', team: 'Avengers' };
const thanos = { name: 'Thanos', evilPlan: 'Wipe out half of the universe', motive: 'Balance' };
displayAvengerInfo(ironMan);
displayAvengerInfo(thanos);
const characters = [ironMan, thanos];
const avengersOnly = assembleTeam(characters);
console.log(avengersOnly);
