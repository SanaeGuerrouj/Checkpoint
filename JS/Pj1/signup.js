let emailcheck="sanaeguerrouj7@gmail.com";
let passwordcheck="Hello";
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let btn=document.getElementById('btn');
let message =document.getElementById('message');


btn.addEventListener('click',function(e){

 e.preventDefault(); // Empêche le rechargement
 let email = document.getElementById('email').value;
 let password = document.getElementById('password').value;
 let message =document.getElementById('message');

 
if (email===emailcheck && password===passwordcheck) {
message.style.cssText ='border: 2px solid #cc6600; padding: 10px; margin-top: 10px; color: #cc6600; background-color: #fff0e6; border-radius: 5px;';
message.innerHTML="Votre email et mot de passe sont incorecte veuillez essayer autre chose";
return;}
 
 if (email===emailcheck) {
message.style.cssText = 'border: 2px solid #cc6600; padding: 10px; margin-top: 10px; color: #cc6600; background-color: #fff0e6; border-radius: 5px;';
message.innerHTML="Votre e-mail est incorecte veuillez essayer autre chose";
return
}

 if (password===passwordcheck) {
message.style.cssText ='border: 2px solid #cc6600; padding: 10px; margin-top: 10px; color: #cc6600; background-color: #fff0e6; border-radius: 5px;';
message.innerHTML="Votre mot de passe est incorecte veuillez essayer autre chose";
return;}

else{message.style.cssText ='border: 2px solid #228B22; padding: 10px; margin-top: 10px; color: #228B22; background-color: #e6ffe6; border-radius: 5px;';
message.innerHTML=" <h6>Félicitations ! Votre compte a bien été créé.</h6>";}

});
