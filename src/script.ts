const nom: string = "Dupont";
console.log(nom);
const age: number = 42;
console.log(age);
const isFrontend: boolean = true;
console.log(isFrontend);
const villeNatale: string | null = "Paris" as string;
console.log(villeNatale);
const numberOfBrowser: number | undefined = 2;
console.log(numberOfBrowser);


//exercice 6
const nombre: number[]  = [1,2,3,4,5];
console.log(nombre);
nombre.push(6);
nombre.slice(1);
console.log(nombre);
nombre.map(nombre => console.log(nombre));

//tuple
// Création du tuple pour représenter un livre
let livre: [string, number, boolean] = ["Le Seigneur des Anneaux", 1954, true];
// Affichage des détails du livre
console.log("Titre:", livre[0]);
console.log("Année de publication:", livre[1]);
console.log("Statut de disponibilité:", livre[2]);
// Modification du statut de disponibilité du livre
livre[2] = false;
// Ajout d'un commentaire comme quatrième élément du tuple
let tupleAvecCommentaire: [string, number, boolean, string] = [...livre, "Un commentaire sur ce livre"];
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
enum NiveauAcces {
    None = 0,
    Read = 1,
    Write = 2,
    Admin = 3
}

// Déclaration d'une variable accesUtilisateur et assignation du niveau Write de l'enum NiveauAcces
let accesUtilisateur: NiveauAcces = NiveauAcces.Write;

// Écriture d'une fonction qui prend un paramètre de type NiveauAcces et affiche un message approprié selon le niveau d'accès
function afficherMessageAcces(niveau: NiveauAcces): void {
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
enum NiveauAccesString {
    None = "Aucun",
    Read = "Lecture",
    Write = "Écriture",
    Admin = "Administrateur"
}

// Écriture d'une fonction qui prend un paramètre de type NiveauAccesString et affiche un message approprié selon le niveau d'accès
function afficherMessageAccesString(niveau: NiveauAccesString): void {
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

let etudiant: {
    nom: string;
    age: number;
    inscriptionActive : boolean;
} = {
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
let donneesDynamiques: any = 42;
console.log(donneesDynamiques);
donneesDynamiques = {
    nombre: 42,
    nombreString: "quarante-deux"
}
console.log(donneesDynamiques);
console.log(donneesDynamiques.nombre);
console.log(donneesDynamiques.nombreString);

console.log(donneesDynamiques.ville);

function afficherMessage(message: string): void {
    console.log(message);
}

afficherMessage("Ceci est un message de test.");

let info: unknown;

info = "Chaîne de caractères";
console.log(typeof info); 
info = 123;
console.log(typeof info); 
info = { key: "valeur" };
console.log(typeof info); 

let infoString: string = info as string;
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
const saluer = (nom: string): string => `Bonjour, ${nom} !`;
console.log(saluer("Alice"));

const ajouter = (a: number, b: number): number => a + b;
console.log(ajouter(3, 4)); 

const afficherDate = (): void => {
    const date = new Date();
    console.log(date.toLocaleDateString());
};
afficherDate(); 

//solution
// Fonction saluer
// function saluer(nom: string): string {
//     return `Bonjour ${nom} !`;
// }

// // Fonction ajouter
// function ajouter(a: number, b: number): number {
//     return a + b;
// }

// // Fonction afficherDate
// function afficherDate(): void {
//     console.log(`La date et l'heure actuelles sont : ${new Date().toLocaleString()}`);
// }

// // Utilisation des fonctions
// console.log(saluer("Alice"));
// console.log(`La somme de 5 et 3 est ${ajouter(5, 3)}`);
// afficherDate();

//exercice 11
interface Book {
    title: string;
    author: string;
    isbn: string;
}

interface Member {
    name: string;
    memberId: number;
    email: string;
}

const addBook = (listeLivres: Book[], livre: Book): void => {
    listeLivres.push(livre);
};

const addMember = (listeMembres: Member[], membre: Member): void => {
    listeMembres.push(membre);
};

const printBooks = (listeLivres: Book[]): void => {
    listeLivres.forEach((livre, index) => {
        console.log(`Livre ${index + 1}:`);
        console.log(`Titre: ${livre.title}`);
        console.log(`Auteur: ${livre.author}`);
        console.log(`ISBN: ${livre.isbn}`);
        console.log("-------------------------");
    });
};

const printMembers = (listeMembres: Member[]): void => {
    listeMembres.forEach((membre, index) => {
        console.log(`Membre ${index + 1}:`);
        console.log(`Nom: ${membre.name}`);
        console.log(`Identifiant de membre: ${membre.memberId}`);
        console.log(`Email: ${membre.email}`);
        console.log("-------------------------");
    });
};

const listeLivres: Book[] = [];
const livre1: Book = { title: "Harry Potter", author: "J.K. Rowling", isbn: "9780545010221" };
const livre2: Book = { title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien", isbn: "9782070612842" };
addBook(listeLivres, livre1);
addBook(listeLivres, livre2);
printBooks(listeLivres);

const listeMembres: Member[] = [];
const membre1: Member = { name: "Alice", memberId: 1, email: "alice@example.com" };
const membre2: Member = { name: "Bob", memberId: 2, email: "bob@example.com" };
addMember(listeMembres, membre1);
addMember(listeMembres, membre2);
printMembers(listeMembres);

interface LibraryManagement {
    (): void; 
    addBook(book: Book): void; 
    addMember(member: Member): void; 
    printBooks(): void; 
    printMembers(): void; 
}

const createLibraryManagement = (): LibraryManagement => {
    const livres: Book[] = [];
    const membres: Member[] = [];

    const resume = (): void => {
        console.log("Résumé des livres enregistrés :");
        printBooks();
        console.log("Résumé des membres enregistrés :");
        printMembers();
    };


    const addBook: LibraryManagement["addBook"] = (book: Book): void => {
        livres.push(book);
    };

    const addMember: LibraryManagement["addMember"] = (member: Member): void => {
        membres.push(member);
    };

    const printBooks: LibraryManagement["printBooks"] = (): void => {
        livres.forEach((livre, index) => {
            console.log(`Livre ${index + 1}:`);
            console.log(`Titre: ${livre.title}`);
            console.log(`Auteur: ${livre.author}`);
            console.log(`ISBN: ${livre.isbn}`);
            console.log("-------------------------");
        });
    };

    const printMembers: LibraryManagement["printMembers"] = (): void => {
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

const livre3: Book = { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156013987" };
const membre3: Member = { name: "Claire", memberId: 3, email: "claire@example.com" };

libraryManagement.addBook(livre3);
libraryManagement.addMember(membre3);

libraryManagement();

//exercice 12
class Car {
    private _brand: string;
    private _model: string;
    private _year: number;

    constructor(brand: string, model: string, year: number) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get year(): number {
        return this._year;
    }
    displayInfo(): void {
        console.log(`${this.year} ${this.brand} ${this.model}`);
    }
}

const car1 = new Car("Toyota", "Corolla", 2021);
car1.displayInfo(); 

class ElectricCar extends Car {
    private _batteryCapacity: number;

    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year);
        this._batteryCapacity = batteryCapacity;
    }

    displayInfo(): void {
        console.log(`${this.year} ${this.brand} ${this.model} - Battery Capacity: ${this._batteryCapacity} kWh`);
    }
}

const electricCar1 = new ElectricCar("Tesla", "Model S", 2022, 100);
electricCar1.displayInfo(); 


//exercice 13
//énoncé 1
function findMaxSimple<T extends string | number>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }

    let maxItem: T = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (compare(arr[i], maxItem) > 0) {
            maxItem = arr[i];
        }
    }

    return maxItem;
}

function compare<T extends string | number>(a: T, b: T): number {
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

const findMaxStrength = <T extends {strength: number}>(arr: T[]) => {
    let value = 0;
    let indexElement = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.strength > value ) {
            value = element.strength;
            indexElement = index;
        }
    }
    
    return arr[indexElement];
} 

const maxStrength = findMaxStrength(array2);
console.log(maxStrength)

//exercice 14
interface Avenger {
    name: string;
    power: string;
    team: string;
}

interface Villain {
    name: string;
    evilPlan: string;
    motive: string;
}

function displayAvengerInfo(character: Avenger | Villain): void {
    if ('team' in character) {
        console.log(`Avenger: ${character.name}, Power: ${character.power}, Team: ${character.team}`);
    } else {
        console.log(`Villain: ${character.name}, Evil Plan: ${character.evilPlan}, Motive: ${character.motive}`);
    }
}

function assembleTeam(characters: (Avenger | Villain)[]): Avenger[] {
    const avengersTeam: Avenger[] = [];
    for (const character of characters) {
        if ('team' in character && character.team === 'Avengers') {
            avengersTeam.push(character);
        }
    }
    return avengersTeam;
}

const ironMan: Avenger = { name: 'Iron Man', power: 'Super suit', team: 'Avengers' };
const thanos: Villain = { name: 'Thanos', evilPlan: 'Wipe out half of the universe', motive: 'Balance' };

displayAvengerInfo(ironMan);
displayAvengerInfo(thanos);

const characters: (Avenger | Villain)[] = [ironMan, thanos];
const avengersOnly: Avenger[] = assembleTeam(characters);
console.log(avengersOnly);

