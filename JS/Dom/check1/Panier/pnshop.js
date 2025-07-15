let btnPannier=document.getElementById('btn-pan');
let Compteur1= document.getElementById('Comp1')
let btnShop=document.getElementById('btn-shop')
 

 btnPannier.addEventListener('click', function () {
    
    window.open('Pnlist.html', '_blank');
 

  });


  let count = 0; // 

 btnShop.addEventListener('click', function () {

  count++;
  Compteur1.innerHTML =count; 
  
  
  localStorage.setItem("panierCount", count);

 
   
    
   });
 


  btnShop.addEventListener('click', function () {
   
   localStorage.setItem("effacer","oui");
   
     
   });





 
   
    
  









    

    
 

 

    
    
