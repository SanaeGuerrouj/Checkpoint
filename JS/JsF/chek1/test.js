// Ex1:Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


// n=prompt('Entrer combien de valeur dans votre array')
// x=[];
// for(j = 0; j<n; j++)
// {
// i=prompt('entrer la valeur de i')
// x.push(i)
// // x[j]= Number(i);  // i=x[j]; nn
// console.log(x)

// }


// function Maxmin (){
//     let max = Math.max(...x);
//     let min = Math.min(...x);

//     console.log("Le max est :", max);
//     console.log("Le min est :", min);
//     return {max,min};
  
// }

// Maxmin ()


// Ex2 :Create a function that takes in an array of numbers and returns the sum of its cubes.


// n=prompt('Entrer combien de valeur dans votre array')
// x=[];
// for(j = 0; j<n; j++)
// {
// i=prompt('entrer la valeur de i')
// x.push(Number(i)) ///Fait attt Prompt genere  des string !Faut convertir i en nombre avant de le stocker
// console.log(x)

// }

// function sumCube (){
//     let somme = x.reduce((acc, val) => acc + val, 0);  //somme arr mth1
//     let cube= Math.pow(somme,3);  //Cube arr
//     console.log(somme); 
//     console.log(cube);
//     return {somme,cube};
  
// }

// sumCube ()




// Ex3:Create a function that takes a number as an argument and returns true or false depending 
// on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

let num =prompt("entrer un numero")
let arr = num.split('').map(Number);
console.log(arr);
let n = arr.length-1;
let r = Math.floor(n / 2);
 
console.log(n);
// console.log(r);

//  for (j=0;j<r;j++){
//     console.log("nnn",arr[n-j])
//   if(arr[j]==arr[n-j])
//       {console.log("Le num que vous avez entrer est symétrique")}
//   else{
//    console.log("Le num que vous avez entrer n'est pas symétrique")
//     }
//  }


 for (j=0;j<r;j++){
  if(arr[j]!==arr[n-j]){
      console.log("nombre n est pas sym");
  break;
  }

  else(console.log("Le nombre est sym"))
     
 }








