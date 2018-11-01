export default class LocationApi {
	constructor() {
	}
	getMyIp() {
		return fetch ('https://api.ipify.org?format=json')
				.then(res => res.json())
				.then(res => res.ip)
	}


	getMyLocation(ololo) {
		return fetch('http://api.ipstack.com/'+ololo+'?access_key=ea06658607226dda76d14f5d1a8f8bef')
			   .then(res => res.json())
		}

	getMyWeather(city) {
		return fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=041fbe777a165d78bf99e6a410d98fce')
		.then((res) =>res.json())
	}
};
