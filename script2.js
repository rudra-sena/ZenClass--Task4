var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all' , true);

request.send();

request.onload = function() {
    
    var data=JSON.parse(this.response);

    // Get all the countries from Asia continent /region using Filter function

    var asia = data.filter((item)=>{
        return item.region==="Asia"});
    console.log("Asian countries: ");
    console.log(asia);

    // Get all the countries with population of less than 2 lacs using Filter function

    var populationCheck=data.filter(function(ele){
        return ele.population<200000;

    })
    console.log("Countries with population less than 2 lakhs: ")
    console.log(populationCheck);

    // Print the following details name, capital, flag using forEach function 

    console.log("Country details: ");
    data.forEach((item)=>{
        console.log("Name: ", item.name)
        console.log("Capital: ", item.capital)
        console.log("Flag: ", item.flag);
    })

    // Print the total population of countries using reduce function 

    var totalPopulation=data.reduce((sum,item)=>{
        return sum+item.population;
    },0)
    console.log("Total population is: ", totalPopulation);

    // Print the country which use US Dollars as currency.
    //var currArr= new Array;
    console.log("Countries having USD as currency: ");
    
   var curr=data.filter((item)=>{
       var country= item.currencies.filter((ele)=>{
           return ele.code==="USD";
       })
       if(country.length>0)
       return item;
   }).map((x)=>{
       return x.name;
   })
   console.log(curr);
 

    
    

 

}
    
    

