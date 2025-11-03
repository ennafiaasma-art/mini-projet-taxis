
const prompt = require("prompt-sync")();

let taxis = [
    { id: 1, position: 4, desponible: true, tempstrajet: 0, totalrides: 0 },
    { id: 5, position: 6, desponible: true, tempstrajet: 0, totalrides: 0 },
    { id: 9, position: 13, desponible: true, tempstrajet: 0, totalrides: 0 }
];
// let Request = [
//     { reqId: 1, position: 1, duration: 3, time: 0 },
//     { reqId: 2, position: 5, duration: 4, time: 2 },
//     { reqId: 3, position: 12, duration: 2, time: 4 },
//     { reqId: 4, position: 7, duration: 5, time: 5 }
// ];
let Request=[];


let tab = [];
function disponible() {

    for (let i = 0; i < taxis.length; i++) {
        if (taxis[i].desponible == true) {
            tab.push(taxis[i])
            console.log("taxies disponible : " + taxis[i].id);

        }


    }

}





function rechercheTaxiDisponibleetproche() {
    let pos = Number(prompt("entrer votre position :  "));
    let min = +Infinity;
    let id;
    for (let i = 0; i < tab.length; i++) {
        let compar = Math.abs(tab[i].position - pos);
        if (min > compar) {
            min = compar
            id = tab[i]
        }


    }
    console.log(id);


}
disponible()
rechercheTaxiDisponibleetproche()

function AjouterDemande() {
    let comptoirRequest = Request.length
    console.log("Ajouter une demande :");
    let n = parseInt(prompt(" combien de Demandes voulez-vous ajouter :"))
    for (let i = 0; i < n; i++) {
        console.log(`\n Demande N° : ${i + 1} `);
        let reqId = comptoirRequest + 1
        let position = parseInt(prompt("entrez la position :"))
        let duration = parseInt(prompt("Entrez la durée :"))
        
        Request.push({ reqId, position, duration})
    }
    console.log("\n La demande :");
    console.log(Request)
}
AjouterDemande()

function durationDetrajet(taxis) {

}



