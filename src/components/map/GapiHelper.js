export function searchNearby(google, map, request) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status, pagination) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log('placesServicestatus:OK');
        console.log('status :')
        resolve(results, pagination);
      } else {
        reject(results, status);
        console.log(google.maps.places.PlacesServiceStatus);
      }
    })
  });
}

// export function getLocation() {
//   function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         return 
//     }
//   }


// }
/*
 * getDetails
 *
 * Get details from the Google API about one specific place.
 */
export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId
    }

    service.getDetails(request, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return reject(status);
      } else {
        resolve(place);
      }
    })
  })
}