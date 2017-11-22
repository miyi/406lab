var options = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 0
};

function getPosition(options) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	})
}

export default getPosition