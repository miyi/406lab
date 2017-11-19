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

{"event":"{\"data\":{},\"context\":{\"request\":{\"sourceIp\":\"70.79.144.245\",\"headers\":{},\"httpMethod\":\"post\"},\"auth\":null,\"sessionCache\":{},\"environment\":{},\"graphcool\":{\"rootToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw\",\"endpoints\":{\"simple\":\"https://api.graph.cool/simple/v1/cj9xhcv7502ko01631q4a3h3h\",\"relay\":\"https://api.graph.cool/relay/v1/cj9xhcv7502ko01631q4a3h3h\",\"system\":\"https://api.graph.cool/system\",\"subscriptions\":\"wss://subscriptions.us-west-2.graph.cool/v1/cj9xhcv7502ko01631q4a3h3h\"},\"projectId\":\"cj9xhcv7502ko01631q4a3h3h\",\"alias\":null,\"pat\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw\",\"serviceId\":\"cj9xhcv7502ko01631q4a3h3h\"}}}","logs":[{"2017-11-16T07:17:52.294Z":"getting event {\"data\":{},\"context\":{\"request\":{\"sourceIp\":\"70.79.144.245\",\"headers\":{},\"httpMethod\":\"post\"},\"auth\":null,\"sessionCache\":{},\"environment\":{},\"graphcool\":{\"rootToken\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw\",\"endpoints\":{\"simple\":\"https://api.graph.cool/simple/v1/cj9xhcv7502ko01631q4a3h3h\",\"relay\":\"https://api.graph.cool/relay/v1/cj9xhcv7502ko01631q4a3h3h\",\"system\":\"https://api.graph.cool/system\",\"subscriptions\":\"wss://subscriptions.us-west-2.graph.cool/v1/cj9xhcv7502ko01631q4a3h3h\"},\"projectId\":\"cj9xhcv7502ko01631q4a3h3h\",\"alias\":null,\"pat\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw\",\"serviceId\":\"cj9xhcv7502ko01631q4a3h3h\"}}}"},{"2017-11-16T07:17:52.294Z":"requiring { default: [Function] }"},{"2017-11-16T07:17:52.294Z":"{ data: {},\n  context: \n   { request: { sourceIp: '70.79.144.245', headers: {}, httpMethod: 'post' },\n     auth: null,\n     sessionCache: {},\n     environment: {},\n     graphcool: \n      { rootToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw',\n        endpoints: [Object],\n        projectId: 'cj9xhcv7502ko01631q4a3h3h',\n        alias: null,\n        pat: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MTY5NzIsImlhdCI6MTUxMDgxNjY3MiwiY2xpZW50SWQiOiJfIiwicHJvamVjdElkIjoiY2o5eGhjdjc1MDJrbzAxNjMxcTRhM2gzaCIsInBlcm1hbmVudEF1dGhUb2tlbklkIjoiY2phMjU4bDUyNjlmbDAxODYyN3Biemo1MyJ9.emEh9SfQfcq9d4Pku5n1TQvywpEAkW73h3sF-claezw',\n        serviceId: 'cj9xhcv7502ko01631q4a3h3h' } } }"}],"returnValue":{"data":null}}