
/*Note : https://restcountries.eu/ wasn't working so I had to use "https://restcountries.com/v3/all" 
		Whichh does not conatained any data related to population*/

const country_data = () =>
{
    const All_data = new XMLHttpRequest();
    //All_data.open("Get","https://restcountries.com/v3/all");
    All_data.open("Get","https://restcountries.com/v3/all");
    
    All_data.responseType="json";

    All_data.onload = () =>
    {   console.log("A). - Get all the countries from Asia continent /region using Filter function");

       data = All_data.response;
        const Asia = data.filter(({region}) => region === 'Asia');
        //console.log(data.filter( ({region}) => region === "asia"));
        console.log(Asia);   
        
       console.log("-------------------------------------------------------");

       console.log("B). Get all the countries with a population of less than 2 lakhs using Filter function");

       console.log("-------------------------------------------------------");

        console.log("C). Print the following details name, capital, flag using forEach function");

        data.forEach(e => {
            console.log(e.name);
            console.log(" Capital :" +e.capital);
            console.log(" Flag :"+e.flag);
        }); 

        console.log("-------------------------------------------------------");


        
        console.log("D). Print the total population of countries using reduce function");

        

        console.log("-------------------------------------------------------");

        

        console.log("E) Print the country which uses US Dollars as currency.");'United States dollar'
       
        for(let country of data)
        { 
            if(country.currencies)
            {      let d=country.currencies;
                if(d.USD)
                {
                  console.log(country);  
                }
                  
            }
        }

        console.log("-------------------------------------------------------");
    
       
    }


    All_data.send();
};



country_data();