export default class LocationApi {
	constructor() {
	this.ip
	this.country;
	this.city;
	}
	getMyIp() {
		fetch('https://api.ipify.org?format=json')
		.then((res)=>res.json())
		.then((res)=> this.ip = res.ip)
	}
	getMyLocation(ololo) {
		let this1 = this
		fetch('http://api.ipstack.com/'+ololo+'?access_key=ea06658607226dda76d14f5d1a8f8bef')
		.then((res)=>res.json())
		.then(function(res){ this1.country = res.country_name
							this1.city = res.city
							this1.latitude = res.latitude
							this1.longitude = res.longitude

		})
		
	}
};
