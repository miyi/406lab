function getBrowserLocation() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const coords = pos.coords;
      return {
          lat: coords.latitude,
          lng: coords.longitude
      }
  })
}


export const getLocationPromise = new Promise(
  function(resolve, reject) {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        resolve(userLocation);
      })
    } else {
      var noNavi = 'geolocation not available';
      reject(noNavi);
    }
  }
);
