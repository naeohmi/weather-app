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
const u1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const u2 = '&APPID=3bfe1bb3354e449001b55ef397099f50';

let click = () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
        let z = document.getElementById('zip').value;
        console.log(z);
        weather(z);
    });
};
click();

let weather = (z) => {
    fetch(u1 + z + u2)
    .then(function (r) {
        return r.json();
    }).then(function (d) {
        let city = document.createElement('h3');
        city.innerHTML = 'City: ' + d.name;
        city.setAttribute('id', 'city');
        document.getElementById('container').appendChild(city);
        console.log(city);
    })
};