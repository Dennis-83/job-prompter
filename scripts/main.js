// console.log(departments);

//          Opdracht 1          //

// console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");
// console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description + ".");
// console .log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers");
// console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);


//          Opdracht 2          //

// const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
// // console.log(userInput);
//
//
//
// if (userInput === "sales" || userInput === "marketing" || userInput === "customer-service") {
//     // const userInputDepDescription = ;
//     console.log("Je koos " + userInput + ". " + departments[userInput].description);
// } else {
//     console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
// }


//          Opdracht 3          //

// const newInput = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n" +
//     "0: ["+ departments.marketing.jobs[0].title +  "],\n" +
//     "1: ["+ departments.marketing.jobs[1].title +  "],\n" +
//     "2: ["+ departments.marketing.jobs[2].title +  "],\n" +
//     "3: ["+ departments.marketing.jobs[3].title +  "]");
// console.log(newInput);
//
//
//
// switch (newInput) {
    // case "0":
    //     console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description);
    //     break;
    // case "1":
    //     console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description);
    //     break;
    // case "2":
    //     console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description);
    //     break;
    // case "3":
    //     console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description);
    //     break;
// -- Kortere schrijfwijze, minder code nodig --
//     case "0":
//     case "1":
//     case "2":
//     case "3":
//         console.log("Je koos " + departments.marketing.jobs[newInput].title + ". Een uitdagende rol! " + departments.marketing.jobs[newInput].description);
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
// }


//          Opdracht 4          //


const userInput2 = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");


if (userInput2 === "sales" || userInput2 === "marketing" || userInput2 === "customer-service") {
    console.log("Je koos " + userInput2 + ". " + departments[userInput2].description);
    console.log([userInput2] + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[userInput2].numberOfEmployees + " medewerkers.");


    const newInput2 = prompt("Je koos " + [userInput2] + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n" +
        "0: [" + departments[userInput2].jobs[0].title + "],\n" +
        "1: [" + departments[userInput2].jobs[1].title + "],\n" +
        "2: [" + departments[userInput2].jobs[2].title + "],\n" +
        "3: [" + departments[userInput2].jobs[3].title + "]");

    switch (newInput2) {
        case "0":
            // console.log("Je koos " + departments[userInput2].jobs[0].title + ". Een uitdagende rol! " + departments[userInput2].jobs[0].description);
            // break;
        case "1":
            // console.log("Je koos " + departments[userInput2].jobs[1].title + ". Een uitdagende rol! " + departments[userInput2].jobs[1].description);
            // break;
        case "2":
            // console.log("Je koos " + departments[userInput2].jobs[2].title + ". Een uitdagende rol! " + departments[userInput2].jobs[2].description);
            // break;
        case "3":
            console.log("Je koos " + departments[userInput2].jobs[newInput2].title + ". Een uitdagende rol! " + departments[userInput2].jobs[newInput2].description);
            break;
        default:
            console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
    }


} else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}


//          Opdracht 5              //

// document.getElementById('role-title').textContent = 'banaan!';
//
// const userInput3 = prompt("Input hier:");
//
// document.getElementById("error-message").textContent = userInput3;

// const userInput3 = prompt(`Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]`);
//
//
// if (userInput3 === "sales" || userInput3 === "marketing" || userInput3 === "customer-service") {
//     document.getElementById("department-description").textContent = departments[userInput3].description;
//
//     const newInput3 = prompt(`Je koos ${userInput3}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
//     0: ${departments[userInput3].jobs[0].title},
//     1: ${departments[userInput3].jobs[1].title},
//     2: ${departments[userInput3].jobs[2].title},
//     3: ${departments[userInput3].jobs[3].title}`);
//
//
//     if (newInput3 === "0" || newInput3 === "1" || newInput3 === "2" || newInput3 === "3") {
//         document.getElementById("role-title").textContent = departments[userInput3].jobs[newInput3].title;
//         document.getElementById("role-description").textContent = departments[userInput3].jobs[newInput3].description;
//     } else {
//         document.getElementById("error-message").textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
//     }
// } else {
//     document.getElementById("error-message").textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
// }













