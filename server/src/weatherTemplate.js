'use latest'

// const urlencode = require('urlencode')
// require('isomorphic-fetch')

// const API_KEY = '' // add your own API key from www.openweathermap.org
// const api = 'https://api.openweathermap.org/data/2.5/weather'
// const units = 'metric' // or 'standard', or 'imperial'

// module.exports = event => {
//   const { city } = event.data

//   const endpoint = `${api}?q=${city}&units=${units}&appid=${API_KEY}`

//   return fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {
//       if (data.cod == 200) {
//         data.owid = data.id;
//         return {
//           data: {
//             temperature: data.main.temp,
//             description: data.weather[0].description
//           }
//         }
//       }
//       else {
//         return {error: data}
//       }
//     })
// }

const fetch = require('node-fetch')

module.exports = function (event) {
  const city = event.data.city
  return fetch(getApiUrl(city))
  .then(res => res.json())
  .then(data => {
    console.log(data)
    return {
      data: {
        temperature: data.main.temp,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
      }
    }
  })
}

function getApiUrl(query) {
	return `http://samples.openweathermap.org/data/2.5/weather?q=${query}&appid=b1b15e88fa797225412429c1c50c122a1`
}