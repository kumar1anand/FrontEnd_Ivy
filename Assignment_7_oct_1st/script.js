//array.splice(index_Inserted, howmany_deleted, item1, ....., itemX)


// const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//1. Splice
//Expected output: [burger, fingerShips, donuts]


// const ans1= foods.splice(0,1);
// const ans2= foods.splice(3,1);
// console.log(foods);

//2.  Array Splice
//const foods = [pizza, burger, fingerShips, donuts, springRoll];

//Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
// const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
// foods.splice(2,0,"noodles","icecream");
// console.log(foods);


//3. Filter

//  const numberArray = [12,324,213,4,2,3,45,4234];
// isEven(numberArray);
// function isEven(numberArray){
//     const ans=numberArray.filter(num=>(num%2==0 ? console.log(num):1))
// }


// isPrime(numberArray);
// function isPrime(numberArray){
//     for(var i=0;i<numberArray.length;i++){
//         var count=0;
//         for(var j=1;j<=numberArray[i];j++){
//             if(numberArray[i]%j==0){
//                 count++;
//                 //console.log(count);
//             }                        
//         }
//         if(count==2){
//             console.log(numberArray[i]);
//             //break;
//         } 
        
//     }
// }

// 4: Reject

const numberArray = [12,324,213,4,2,3,45,4234];
nonPrime(numberArray);
function nonPrime(numberArray){
    for(var i=0;i<numberArray.length;i++){
        var count=0;
        for(var j=1;j<=numberArray[i];j++){
            if(numberArray[i]%j==0){
                count++;
                //console.log(count);
            }                        
        }
        if(count!=2){
            console.log(numberArray[i]);
            //break;
        } 
        
    }
}


//5: Lambda

// isEven= (numberArray)=>{
//     const ans=numberArray.filter(num=>(num%2==0 ? console.log(num):1));
// }
// isEven(numberArray);


//6: Map

// const myArray = [11, 34, 20, 5, 53, 16];
//const ans= myArray.map(arr=>arr*arr);
//console.log(ans);



// findSquareOfNumbers=(myArray)=>{
//     console.log( myArray.map(arr=>arr*arr));
// }
// findSquareOfNumbers(myArray);



//7: Reduce

// const myArray = [2, 3, 5, 10];
// const ans= myArray.reduce((total,mul)=>total*mul,1);
// console.log(ans);

// const myArray = [2, 3, 5, 10];
// const ans= myArray.reduce((total,mul)=>total*mul,1);
// console.log(ans);


