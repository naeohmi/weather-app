// HW Requirements:
// 1. An input field for a user to enter a zip code
// 2. A submit button, when clicked makes a GET request to fetch the weather data from the API
// 3. Render data on the page
// 4. Data to be rendered:
// 		a. City name
// 		b. Current temperature
// 		c. Weather description
// 		d. Min temp
// 		e. Max temp
// 5. Have the temperature turn blue if under 40, and red if above 90

//api call with key:
//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3bfe1bb3354e449001b55ef397099f50
console.log('aliveee');

class Weather {
    constructor(cityName, currentTemp, minTemp, maxTemp, wDesc) {
        this.cityName = cityName;
        this.currentTemp = currentTemp;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.wDesc = wDesc;
    }
    submitZip() {
        console.log('yay');
        let zipCode = document.querySelector('#zip');
        document.querySelector('#click').addEventListener('click', function() {
            console.log('boom!');
            

        })
        
    }
    apiCall() {
        $(() => {
            $.ajax({
                url: 'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3bfe1bb3354e449001b55ef397099f50',
                context: document.body
            }).done((d) => {
                $(this).append(d.weather);
            }).always(() => {
                console.log('run after all');
            })
        })
    }
}

let w = new Weather;
w.submitZip();
//w.apiCall();