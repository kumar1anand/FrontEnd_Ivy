const ages = [33, 12, 20, 16];
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
 //1.group Retail Companies


 
console.log("Anand");
const arr= companies.filter(function(Company){
    if(Company.category=="Retail")
    return true;
})
console.log(arr);
   
//2. group 80's companies



const arr= companies.filter(function(Company){
        if(Company.start>=1980 && Company.start<1990 )
        return true;
    })
    console.log(arr);

//3.companies that lasted for 10years or more
const arr= companies.filter(function(Company){
            if((Company.end - Company.start) >=10 )
            return true;
        })
        console.log(arr);

//4. map ages*20
// const testmap=companies.map(function(Company){
//   return `${Company.name} [${Company.start}-${Company.end}]`;
// })
// console.log(testmap);

//const ans=ages.map(age=>age*20);

const ans= ages.map(function(age){
  return age*20;
})
console.log(ans);


//5.sort ages both accending and decending order

//Asscending

const arr=ages.sort((a,b)=>a-b)
console.log(arr); 

//Descending

const arr=ages.sort((a,b)=>a+b)
console.log(arr); 

//6.get total years for all comapnies

//Not working code
//var age=companies.end-companies.start;
// const yearSum=companies.reduce(function(total,age){
//     return total+(age)
//   },0);
//   console.log(yearSum);

const testmap=companies.map(function(Company){
    return (Company.name + "   ==>> total years: "+[Company.end-Company.start]);
})
console.log(testmap);