let searchBtn=document.getElementById("search-btn");
let countryIn=document.getElementById("country-in");
let result=document.getElementById("result");
searchBtn.addEventListener("click",()=>{
    let countryName=countryIn.value;
    let finalUrl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data[0].name.common);
        console.log(data[0].capital);
        result.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Common Languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
        </div>
        
        `;
    })
    .catch(()=>{
        if(countryName.length==0){
            result.innerHTML=`<h3>The input field is empty</h3>`;
        }
        else{
            result.innerHTML=`<h3>Please enter a valid country</h3>`;
        }
    });
});