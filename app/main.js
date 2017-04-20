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
console.log('aliveee');

const urlFront = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const urlBack = 'APPID=3bfe1bb3354e449001b55ef397099f50';
const button = document.getElementById('submit');

$(function () {
    const cityName = document.getElementById('cityName');
    const curTemp = document.getElementById('curTemp')
    const minTemp = document.getElementById('minTemp');
    const maxTemp = document.getElementById('maxTemp');
    const wDesc = document.getElementById('wDesc');

        console.log('yay');
        let zipCode = document.querySelector('#zip');
        document.querySelector('#click').addEventListener('click', function () {
            console.log('boom!');
            submitZip();


        })

    
        let submitZip = () => {

    }
    let url = () => {
        const url1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
        const url2 = '524901&APPID=3bfe1bb3354e449001b55ef397099f50';
        let inputZip = document.querySelector('#zip').value;
        console.log(inputZip);
    }
    let apiCall = () => {
        $(() => {
            $.ajax({
                url: '',
                context: document.body
            }).done((d) => {
                $(this).append(d.weather);
            }).always(() => {
                console.log('run after all');
            })
        })
    }

});
