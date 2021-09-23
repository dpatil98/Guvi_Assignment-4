
/*Note : The Given link ( https://restcountries.eu/rest/v2/all ) for Q2 and Q3 had some server side issues
        to resolve the issue the following link ('https://restcountries.com/v3/all')  has been used 
         newly used link was lacking in popuation data */ 
// Name : Dhananjay Patil
// Batch: B28

console.log("Q1. How to compare two JSON have the same properties without order? var obj1 = { name: Person 1, age:5 }; var obj2 = { age:5, name: Person 1 };")

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var flag=true;

if(Object.keys(obj1).length===Object.keys(obj2).length){
    for(key in obj1) 
    { 
        if(obj1[key] !== obj2[key]) 
        {
            flag=false;
            
            break;

        }
        else {
            continue;           
        }
    }
}
else {
    flag=false;
}
(flag===true) ? console.log("Both Objects Are Equal") : console.log("Both Objects Are Not Equal");
console.log("");

/////////////////////////////////////////////////////////////////////

console.log(" Q2 .Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console");

rest_con = () => 
{
    const All_data = new XMLHttpRequest();
    All_data.open('Get', 'https://restcountries.com/v3/all');
    All_data.responseType="json";
    
    All_data.onload=() =>
    {
        data=All_data.response;

        console.log(data.map(d => d.flag));

console.log("Q3. Use the same rest countries and print all countries name, region, sub region and population")   

        data.map(d =>{                 
                                       console.log(d.name);                        
                                      // console.log(" Name :" + Object.values(d.name));
                                       console.log(" Region :" +     d.region );
                                       console.log(" Sub-region :"+d.subregion);
                                       console.log("_________________________________");
                                        // used link had no population data .
                                 });
            
    }

    All_data.send();

}

rest_con();
