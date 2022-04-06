const introBtn = document.querySelector('.intro-form .btn');
const userNa = document.querySelector('.intro-form input');
const introForm = document.querySelector('.intro-form');
const inputForm = document.querySelector('.input-form');
const inputBtn = document.querySelector('.input-form .btn');
const search = document.querySelector('.input-form input');
const user = document.querySelector('.input-form .user');
const err = document.querySelector('.error');
const api = {
    key: '7278a0781d69274ffd338e2178d97b3c',
    base: 'https://api.openweathermap.org/data/2.5/'
}


function getName() {
    let userName = userNa.value;
    user.innerHTML = userName;
    user.style.color = '#db6400';
    user.style.textTransform = 'capitalize';
    introForm.style.display = 'none';
    inputForm.style.display = 'flex';
    
}

function getWeather() {
    let output = '';
    
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.cod == 404) {
                
                err.innerHTML = `Please enter a valid city`;
            } else {
                err.innerHTML = '';
                const city = document.querySelector('.city');
                city.innerHTML = `${data.name}, ${data.sys.country}`;
                
                //getting the day of the week
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const day = new Date().getDay();
                const month = new Date().getMonth();
                //string literal for the date
                const date = document.querySelector('.date');
                date.innerHTML = `${days[day]}, ${months[month]} ${new Date().getDate()} ${new Date().getFullYear()}`;
                //get realtime weather details
                const temp = document.querySelector('.temp');
                temp.innerHTML = `Temp: ${data.main.temp}&deg;C`;
                const weather = document.querySelector('.weather');
                weather.innerHTML = `Weather: ${data.weather[0].main}`;
                const tempRange = document.querySelector('.temp-range');
                tempRange.innerHTML = `Temp Range: ${data.main.temp_min}&deg;C / ${data.main.temp_max}&deg;C`;

            }
        })
}

introBtn.addEventListener('click', getName);
inputBtn.addEventListener('click', getWeather);


// function system() {
//     let userName = userNa.value;
//     console.log(userName);
//     introForm.style.display = 'none';
//     inputForm.style.display = 'flex';
// }

// introBtn.addEventListener('click', system);