export default class LocationApi {
	constructor() {
	}


	getMyIp() {
		return fetch ('https://api.ipify.org?format=json')
	}


	getMyLocation(ololo) {
		return fetch('http://api.ipstack.com/'+ololo+'?access_key=ea06658607226dda76d14f5d1a8f8bef')
	
		}
};
