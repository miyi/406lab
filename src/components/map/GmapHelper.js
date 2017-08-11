function getBrowserLocation() {
  return navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeofail, geoOptions)
}
function onGeoSuccess(pos) {
  const coords = pos.coords;
  console.log('success');
  return {
    lat: coords.latitude,
    lng: coords.longitude,
  }
}
function onGeofail(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const geoOptions = {
  enableHighAccuracy: false,
  timeout: 6000,
  maximumAge: 60000,
};

// const getLocationPromise = new Promise(
//   (resolve, reject) => {
//     if (navigator && navigator.geolocation) {
//       resolve(getBrowserLocation());
//     } else {
//       var noNavi = 'geolocation not available';
//       reject(noNavi);
//     }
//   }
// );

export { onGeoSuccess, onGeofail, geoOptions };
