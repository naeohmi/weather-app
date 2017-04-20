// HW Requirements:
// 1. An input field for a user to enter a zip code
// 2. A submit button, when clicked,
// makes a GET request to fetch the weather data from the API
// 3. Render data on the page
// 4. Data to be rendered:
// 		a. City name
// 		b. Current temperature
// 		c. Weather description
// 		d. Min temp
// 		e. Max temp
// 5. Have the temperature turn blue if under 40, and red if above 90

//save url to GET weather using zip code from the API
const u1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//save personal key to attach to end of URL for API use
const u2 = '&APPID=3bfe1bb3354e449001b55ef397099f50';

//create click event when zip code is input and submit button is pressed
//use the input/submitted zip code to find the weather data  
let click = () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
        let z = document.getElementById('zip').value; //grab the text that was input as the 'value'
        console.log(z);
        weather(z);
    });
};

//using the zipcode, add the necessary data step by step, to the innerHTML of the page
//although fetch is still 'experimental' seemed like a fun/cool chance to use it here
let weather = (z) => {
    fetch(u1 + z + u2) //the full URL with zipcode
    .then(function (r) {
        return r.json(); //grab the json data
    }).then(function (d) {
        let city = document.createElement('h3');
        city.innerHTML = 'City: ' + d.name;
        city.setAttribute('id', 'city');
        let cTemp = document.createElement('h3');
        cTemp.innerHTML = 'Current Temp: ' + d.main.temp;
        let wDesc = document.createElement('h3');
        wDesc.innerHTML = 'Weather Description: ' + d.weather[0].description;
        let minTemp = document.createElement('h3');
        minTemp.innerHTML = 'Min Temp: ' + d.main.temp_min;
        let maxTemp = document.createElement('h3');
        maxTemp.innerHTML = 'Max Temp: ' + d.main.temp_max;

        document.getElementById('container').appendChild(city).appendChild(cTemp).appendChild(wDesc).appendChild(minTemp).appendChild(maxTemp);
    })
};
//call/initialize click function
click();



