var chocolates = [
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "silver",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "crimson",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink"
  ];


//Progression 1: MORE! MORE! MORE!==> addChocolates()
function addChocolates(chocolates,color, count){
    if(count==0) {
        return ;
    }
    else{
        for(var i=0;i<count;i++){
            chocolates.push(color);
          }
    }
}

//Progression 2: LESS! LESS! LESS!===> removeChocolates()

function removeChocolates(number,chocolates){
   var Newarr = new Array();
   if(number==0){
    return chocolates;
    }
    else{
      for(var i=0;i<number;i++){
        Newarr[i]=chocolates.pop();
        }
      }
      return chocolates;
}



//Progression 3: One is not enough!===> dispenseChocolates()


function dispenseChocolates(number,chocolates){
  var Newarr = new Array(number);
  for(var i=0;i<number;i++){
    Newarr[i] = chocolates.pop();
  }
  return Newarr;
}

//Progression 4: My favourite color is...==> dispenseChocolatesOfColor()

function dispenseChocolatesOfColor(chocolates,number, color){
  var Newarr = new Array();
   for(var i in chocolates){
      if(i != color){
         Newarr.push(i);
      }
      
   }
   return Newarr;
}

//Progression 5: LED my chocos!==> noOfChocolates()

function noOfChocolates(chocolate){
    var Number_Of_chocolates = new Array();
    for(var i in chocolates){
            if(chocolates[i]=="green") c1++;
            else if(chocolates[i]=="silver") c2++;
            else if(chocolates[i]=="blue") c3++;
            else  if(chocolates[i]=="crimson") c4++;
            else if(chocolates[i]=="purple") c5++;
            else if(chocolates[i]=="red") c6++;
            else if(chocolates[i]=="pink") c7++;
       }
    
    Number_Of_chocolates.push(c1); 
    Number_Of_chocolates.push(c2); 
    Number_Of_chocolates.push(c3);
    Number_Of_chocolates.push(c4);
    Number_Of_chocolates.push(c5);
    Number_Of_chocolates.push(c6);
    Number_Of_chocolates.push(c7);
    return Number_Of_chocolates;
 }

//Progression 6: Let's stack em up!====> sortChocolateBasedOnCount()


function sortChocolateBasedOnCount(chocolate){

var Number_Of_chocolates = new Array();
for(var i in chocolates){
        if(chocolates[i]=="green") c1++;
        else if(chocolates[i]=="silver") c2++;
        else if(chocolates[i]=="blue") c3++;
        else  if(chocolates[i]=="crimson") c4++;
        else if(chocolates[i]=="purple") c5++;
        else if(chocolates[i]=="red") c6++;
        else if(chocolates[i]=="pink") c7++;
   }

Number_Of_chocolates.push(c1); 
Number_Of_chocolates.push(c2); 
Number_Of_chocolates.push(c3);
Number_Of_chocolates.push(c4);
Number_Of_chocolates.push(c5);
Number_Of_chocolates.push(c6);
Number_Of_chocolates.push(c7);

Number_Of_chocolates.sort();
Number_Of_chocolates.reverse();
  
}

//Progression 7: They taste the same!===> changeChocolateColor()

function changeChocolateColor(chocolates,number, color, finalColor){
    for(var i=0;i<number;i++){
      if(chocolates[x] == color){
      chocolates[x] = finalColor;
       cnt++;
      }
    }

    }


//Progression 8: Convert these heretics!===> changeChocolateColorAllOfxCount()


function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  for(var x in chocolates){
    if(chocolates[x] == color)
    chocolates[x] = finalColor;
  }
}

//Challenge 1: Fresh pickings! ===> removeChocolateOfColor()

function removeChocolateOfColor(color){
  for(var x in chocolates){  
    if(x==color)
    chocolates.pop();
  }
}

//Challenge 2: Rainbows and sunshine! ===> dispenseRainbowChocolates()

function dispenseRainbowChocolates(number){
  var c1=c2=c3=c4=c5=c6=c7=0;   
  var ranbow_chocolate=0; 
    if(chocolates.length==1) return 0;
    else{
        for(var i=0;i<number;i++){
            if(chocolates[i]=="green") c1++;
            else if(chocolates[i]=="red") c2++;
            else if(chocolates[i]=="purple") c3++;
            else  if(chocolates[i]=="blue") c4++;
            else if(chocolates[i]=="crimson") c5++;
            else if(chocolates[i]=="silver") c6++;
            else if(chocolates[i]=="pink") c7++;
       }
       while(c1>=3){
        ranbow_chocolate++;
        c1=c1-3;
       }
       while(c2>=3){
        ranbow_chocolate++;
        c2=c2-3;
       }
       while(c3>=3){
        ranbow_chocolate++;
        c3=c3-3;
       }
       while(c4>=3){
        ranbow_chocolate++;
        c4=c4-3;
       }
       while(c5>=3){
        ranbow_chocolate++;
        c5=c5-3;
       }
       while(c6>=3){
        ranbow_chocolate++;
        c6=c6-3;
       }
       while(c7>=3){
        ranbow_chocolate++;
        c7=c7-3;
       }
    }
    return ranbow_chocolate;
  
}