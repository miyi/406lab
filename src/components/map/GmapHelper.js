export function getBrowserLocation() {
  return navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeofail, geoOptions)
}

export function onGeoSuccess(pos) {
  const coords = pos.coords;
  console.log('success');
  return {
    lat: coords.latitude,
    lng: coords.longitude,
  }
}

export function onGeofail(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export const geoOptions = {
  enableHighAccuracy: false,
  timeout: 8000,
  maximumAge: 60000,
};

export const getLocationPromise = new Promise(
  (resolve, reject) => {
    if (navigator && navigator.geolocation) {
      resolve(getBrowserLocation());
    } else {
      var noNavi = 'geolocation not available';
      reject(noNavi);
    }
  }
);

