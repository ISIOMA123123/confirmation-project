function updateWeather(response) {
    console.log(response.data);

     temperatureElement = document.querySelector("#temperatureValuenow");
    temperature = response.data.temperature.current;
   temperatureElement.innerHTML = Math.round(temperature);

   cityElementHone = document.querySelector("#cityElement");
    cityElementHone.innerHTML = response.data.city;
    
}


function searchCity(city) {
  let apikey =   "7d3fo7t42ac4a88b5f1b6383fbbe2b0b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(updateWeather);

}



function handleSearchSubmit(event) {
    event.preventDefault();

    seachFormInput = document.querySelector("#searchFormInputes");
    console.log(seachFormInput.value);

    
    
    searchCity(seachFormInput.value);
}


searchFormElement = document.querySelector("#seachForm-identity");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");