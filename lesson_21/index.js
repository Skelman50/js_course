'use strict';

import Dom from "./dom.js"
import LocationApi from "./location_api.js"

let body = document.getElementsByTagName('body')[0]
	let a = new LocationApi()
	let b = new Dom()

	
	b.showMap()
	
	let buttonYourLocation = document.createElement('button');
	body.append(buttonYourLocation);
	buttonYourLocation.innerText = "Искать погоду по локации";
	buttonYourLocation.style.display = "inline-block";
	buttonYourLocation.style.verticalAlign = "middle"

	let divForFind = document.createElement('div');
	body.append(divForFind);
	divForFind.style.display = "inline-block";
	divForFind.style.verticalAlign = "middle";
	divForFind.style.marginLeft = "100px";

	let headerForFind = document.createElement('div');
	divForFind.append(headerForFind);
	headerForFind.style.textAlign = "center";
	headerForFind.innerText = "Введите город латиницей";

	let inputForFind = document.createElement('input')
	divForFind.append(inputForFind);
	inputForFind.style.type = "text";

	let buttonForFind = document.createElement('button');
	divForFind.append(buttonForFind );
	buttonForFind.innerText = "Искать"



	buttonYourLocation.addEventListener('click', function(){
		let nowDate = new Date();

		if ((((nowDate.getTime()-+localStorage.getItem("time"))/1000/60)>10)|| localStorage.getItem('time') === null)  {
		b.reset()
	b.showPreloader()

	let promise = new Promise(function(res,rej){
		res(a.getMyIp())
	})

		.then(ip => a.getMyLocation(ip))
		.then(res=>res.city)
		.then(function(res){
			localStorage.setItem('city', res)
			return a.getMyWeather(res)
		})
		.then(res=>{
			let coord = {}
			let main = {}
			let wind = {}
			let weather = [{}]
			let sys = {}
			let param = {coord,main,wind,weather,sys};
			param.coord.lon = res.coord.lon;
			param.coord.lat = res.coord.lat;
		    param.main.temp = res.main.temp;
		    param.main.pressure = res.main.pressure;
		    param.wind.speed = res.wind.speed;
		    param.weather[0].description = res.weather[0].description
		    param.dt = res.dt;
		    param.name = res.name
		    param.sys.sunrise = res.sys.sunrise;
		    param.sys.sunset = res.sys.sunset;
		    param.sys.country = res.sys.country;
		    let stringify = JSON.stringify(param)
		    localStorage.setItem("param",stringify)
		    b.setWeather(res)
			b.hidePreloader()
			b.setCoordinates()
			let dateUse = new Date()
			localStorage.setItem('time', dateUse.getTime())
		});
	}else {
		b.reset()
		let parse = JSON.parse(localStorage.getItem("param"))
		b.setWeather(parse)
		b.setCoordinates()

	}
});

		buttonForFind.addEventListener('click', function(){
		b.reset()
		b.showPreloader()

		let promise = new Promise(function(res,rej){
		res(a.getMyIp())
	})

		.then(ip => a.getMyLocation(ip))
		.then(res=>res.city)
		.then(res=>a.getMyWeather(inputForFind.value))
		.then(res=>{
			b.setWeather(res)
			b.hidePreloader()
			b.setCoordinates()
		})
		.catch(err=> {
			b.hidePreloader()
			alert("Вы ввели несуществующий город")
		})
});









	
	


