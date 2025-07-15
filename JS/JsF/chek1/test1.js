//EX: Write a function that converts an object into an array of keys and values   Object.entries(Obj)!!.


// // Examples
//  Obj = {
//   D: 1,
//   B: 2,
//   C: 3
// }; 
// // ➞ [["D", 1], ["B", 2], ["C", 3]]
//   x=Object.entries(Obj);
//   console.log(x);

// EX:How Much is True? How Much is True? Create a function which returns the number of true values there are in an array.

// let input = prompt("Entrez les éléments du tableau, séparés par des virgules :");
// let array = input.split(",");
// console.log(array);

// S=0;
 
// for(let i = 0; i < array.length; i++){
//  x=array[i].trim().toLowerCase()      //Pr enlever les espace


// if(x=="true"){
//     S=S+1;
// }

 
// }

// console.log(S);





function countTrue(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count++;
		}
	}
	return count;
}


z=[true,true];
console.log(countTrue(z));


//  ach hadii const countTrue = r => r.filter(Boolean).length












 
