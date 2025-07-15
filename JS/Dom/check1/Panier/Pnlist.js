// Bouton du panier dans cette page
let btnPannier = document.getElementById('btn-pan');

// Le compteur affiché dans cette navbar (ID: Comp2)
let Compteur2 = document.getElementById('Comp2');

// Étape 1: Lire le compteur depuis le localStorage

let count2 =localStorage.getItem("panierCount") ;
console.log('count2',count2)

// Mettre à jour l'affichage dans le badge

Compteur2.innerHTML = count2;



let conteunu= document.getElementById("conteunu");
let conteunut= document.getElementById("conteunut");

let action=localStorage.getItem("effacer") ;


 
 if (action === "oui" && count2>0 ) {

        // count2++;
        conteunu.remove();
        conteunut.innerHTML = `
  <div id="conteunupg">
    <img src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/151166/1.jpg?6344" />
    <h3>JEMCO Pc portable Neuf 14" 6GO RAM 320GO ROM SSD (sacoche+écouteur+souris sans fil gratuit)</h3>
    <p>Marque: JEMCO | Produits similaires par JEMCO</p>
    <button id="btnsup">Supprimer</button><br>
    <button id="btn1">Ajouter</button> <br>
    <button id="btn2">-</button>



  </div>
`;


}

let btnsup = document.getElementById('btnsup');
let conteunupg=document.getElementById('conteunupg');

 btnsup.addEventListener('click', function () {
  conteunupg.remove(); 
  localStorage.setItem("effacer", "non"); 
  localStorage.setItem("panierCount", "0"); //  remettre le compteur à 0
  Compteur2.innerHTML = "0"; // mise à jour visuelle
 location.reload();
   
  })



 btn1.addEventListener('click', function () {
 
  count2++;
  Compteur2.innerHTML = count2;
    
  location.reload(); // 👈 reload pour déclencher l'ajout

 });




 




  

 

 

//  if (count2!=0){
//     conteunu.remove();
//  }