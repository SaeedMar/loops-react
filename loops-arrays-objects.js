// ==========================================
// Opdracht 1a
// Schrijf een script dat voor iedere student in de array de score (het getal uit de property "score") in de terminal print

const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];
for (let i = 0; i < scores.length; i++) {
const cijfer = scores[i].score;
let grade;
if (cijfer <= 60) {
    grade = 'F';
}else if (cijfer <= 70) {
    grade = 'D';
}else if (cijfer <= 80) {
    grade = 'C';
}else if (cijfer <= 90) {
    grade = 'B';
}else  {
    grade = 'A';
}
    console.log (`de student ${scores[i].name} heeft een ${grade} gekregen`);






// Verwachtte uitkomsten:
// 83
// 77
// 92
// 66
// ==========================================





// ==========================================
// Opdracht 1b
// Breid je script uit door voor iedere student de score om te rekenen
// naar een letter en dit in de terminal te printen
// < 60 = F, < 70 = D, <80 = C, <90 B, <100 = A
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// Verwachtte uitkomsten:
// B
// C
// A
// D
// ==========================================





// ==========================================
// Opdracht 1c
    // Breid je script uit door de bijbehorende letter op te slaan in de
    // 'grade'-property van ieder student-object in de array.
    // Vóór het script zie je de originele objecten,
    // Na jouw script zie je de aangepaste objecten:
    // console.log(scores) geeft: [
    //  { name: 'Max', score: 83, grade: 'B' },
    //  { name: 'David', score: 77, grade: 'C' },
    //  { name: 'Khalid', score: 92, grade: 'A' },
    //  { name: 'Rianne', score: 66, grade: 'D' }
    //  ];
// ==========================================
scores[i].grade = grade;
console.log(scores);
}


// ==========================================
// Opdracht 2
// Schrijf een script die e-mailadressen genereert voor al onze medewerkers.
// Sla dit op in een nieuwe property "email" die je toevoegt aan iedere medewerker.

const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];
// for (let i = 0; i < NOVIEmployees.length; i++) {
//     Let EmployeeEmail= (`${firstName[i]}+${lastName[i]}@Novi.nl`);
// }
// console.log(EmployeeEmail)
for (let i = 0; i < NOVIEmployees.length; i++) {
    let employee = NOVIEmployees[i];
    let EmployeeEmail = `${employee.firstName}.${employee.lastName}@novi.nl`;
    employee.email = EmployeeEmail;
}

console.log(NOVIEmployees);

// Bij NOVI horen de e-mailadressen altijd in het volgende format: voornaam.achternaam@novi.nl
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(NOVIEmployees) geeft: [
//   { firstName: 'Nova', lastName: 'Eeken', email: 'Nova.Eeken@novi.nl' },
//   { firstName: 'Sam', lastName: 'Barnhoorn', email: 'Sam.Barnhoorn@novi.nl' },
//   { firstName: 'Tessa', lastName: 'Steur', email: 'Tessa.Steur@novi.nl' },
//   { firstName: 'Mark', lastName: 'Rensen', email: 'Mark.Rensen@novi.nl' },
//  ];
// ==========================================






// Opdracht 2-BONUS
// Lukt het je om ervoor te zorgen dat alle e-mailadressen in lowercase letters komen te staan? Dit heb je nog niet geleerd, maar google is your best friend...
// ==========================================




// ==========================================
// Opdracht 3
// Schrijf een script die de property "neighborhood" (de buurt) invult op basis van de postcode van onze studenten.
// Tip: is het hier handig om if-else te gebruiken, of is er wellicht een betere manier?
// 	3513 = Pijlsweerd
//  3514 = Vogelenbuurt
//  3512 = Binnenstad
//  3531 = Lombok
//  3572 = Wittevrouwen
//  3581 = Oudwijk
//  3583 = Schildersbuurt

const students = [
    {name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: null},
    {name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: null},
    {name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: null},
    {name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: null},
];
for (let i = 0; i < students.length; i++) {
    if (students[i].zipCode === '3513'){
        students[i].neighborhood = 'Pijlsweerd';
    }else if (students[i].zipCode === '3514'){
        students[i].neighborhood = 'Vogelenbuurt'
    }else if (students[i].zipCode === '3512'){
        students[i].neighborhood = 'Binnenstad'
    }else if (students[i].zipCode === '3531'){
        students[i].neighborhood = 'Lombok'
    }else if (students[i].zipCode === '3572'){
        students[i].neighborhood = 'Wittevrouwen'
    }else if (students[i].zipCode === '3581'){
        students[i].neighborhood = 'Oudwijk'
    }else if (students[i].zipCode === '3583'){
        students[i].neighborhood = 'Schildersbuurt'
    }
}
console.log(students);
// Verwachte uitkomsten:
// [
//     { name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: 'Oudwijk' },
//     { name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: 'Binnenstad' },
//     { name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: 'Schildersbuurt' },
//     { name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' }
// ]
// ==========================================



