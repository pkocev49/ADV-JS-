console.log('works')

// let countryUrl = 'https://restcountries.com/v3.1/aha/MKD'


// fetch(countryUrl)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
//         for(border of data){
//             console.log(`${border.borders}`)
//         }
//     })

async function getBorderingCountries(alphaCode) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${alphaCode}`);
    const country = await response.json();
    
    console.log("Country:");
    console.log(country);
    
    console.log("Neighbours:");
    async function borderCountry(){
        for(border of country){
            const response = await fetch(`https://restcountries.com/v3.1/alpha/`);
        }
        // const neighbor = await response.json();
        
        //  console.log(neighbor);
      }
   borderCountry()
    }
  getBorderingCountries("MKD");