
const prompt=require("prompt-sync")();

let taxis =[
{id:1 , position:4,desponible:true ,tempstrajet:0 ,totalrides:0 },
{id:5 , position:6,desponible:true ,tempstrajet:0 ,totalrides:0},
{id:9 , position:13,desponible:true ,tempstrajet:0 ,totalrides:0}
];
let requests = [
{ reqId: 1, position: 1, duration: 3, time: 0 },
{ reqId: 2, position: 5, duration: 4, time: 2 },
{ reqId: 8, position: 12, duration: 2, time: 4 },
{ reqId: 4, position: 7, duration: 5, time: 5 }
];



let tab=[];
function disponible(){

for(let i =0;i<taxis.length;i++){
if (taxis[i].desponible==true){
tab.push(taxis[i])
console.log("taxies disponible : "+ taxis[i].id);

}


}

}


// disponible()



function roturn(){
let pos=Number(prompt("entrer votre position :  "));
let min = Infinity;
let id ;
for(let i=0;i<tab.length;i++){
let n=tab[i].position;
let compar = Math.abs(n-pos);
if(min>compar){
min=compar
id=tab[i]
}

}
console.log(id);


}
disponible()
roturn()





function duration(){

const debutheur =Number(prompt("entrer heur   de depart :  "));
let finheur=Number(prompt("entrer tepms final de trajet :"))
let n=taxis[i].tempstrajet
for(let i=0;taxis.length;i++){
if(n==debutheur){
    console.log(taxis[i].id+"occupée ");
    
}else if (n==finheur){
return disponible()
}

}
}
duration()