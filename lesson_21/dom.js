
export default class Dom {
	constructor(){
	
		
	}

	showMap() {
		this.map = document.getElementById('map')
		this.map.style.background = 'url(http://wiki.gis-lab.info/images/c/c8/AGentleIntroductionToGIS_RU_html_75cd0dad.png) no-repeat 50% 50% / 101.5% 101.5%';
		this.map.style.width = ""+(360*3)+"px";
		this.map.style.height = ""+(180*3)+"px";
		this.map.style.position = "relative";
		this.point = document.getElementById('point');
		this.point.style.position = "absolute";
		this.point.style.width = "10px";
		this.point.style.height = "10px";
		this.point.style.background = "red"
		this.point.style.borderRadius = "50%";
		this.point.style.left = "536px";
		this.point.style.top = "265px";
		this.point.style.display = "none";
	}

	showPreloader(){
			this.body = document.getElementsByTagName('body')[0];
			this.load = document.createElement('div');
			this.load_1 = document.createElement('div');
			this.map.append(this.load)
			this.load.append(this.load_1)
			let this1 = this;
			this.load.style.width="300px";

			this.load.style.position="absolute";
			this.load.style.left="50%";
			this.load.style.top="50%";

			this.load.style.height="75px";
			this.load.style.border="5px solid black";
			this.load.style.position = "relative";
			this.load.style.overflow = "hidden";
			this.load_1.style.width="75px";
			this.load_1.style.height="100%";
			this.load_1.style.position="absolute";
			this.load_1.style.background="red";
			let sec = 0
			let id = setInterval(function(){
				sec++
				this1.load_1.style.left = `${sec*10}%`
				if (sec===10) {
					sec = 0;
				}
			},50)
	}
	hidePreloader(){
		this.load.remove()
		
	}
	setCoordinates() {
		let this1 = this;
		let sec = 0;
		this.point.style.display = "block";
		new Promise(function(res,rej){
		let id = setInterval (function(){
			sec++
		if (+this1.long>0) {
		this1.point.style.left = ""+(536+sec)+"px"
		if (this1.point.style.left===""+(536+(Math.round(+this1.long))*3)+"px") {
			sec = 0
			clearInterval(id)
			res(sec)
		}
	
	}else {
		if (+this1.long>-1) {
		this1.point.style.left = ""+(536+(+this1.long))+"px";
		sec = 0;
			clearInterval(id)
			res(sec)
	}else {
		this1.point.style.left = ""+(536-sec)+"px"
		if (this1.point.style.left===""+(536+(Math.round(+this1.long))*3)+"px") {
			sec = 0;
			clearInterval(id)
			res(sec)
		}
	}
	}
		},10)
		
	}).then(function(res){
		let id = setInterval (function(){
			res++
		if (+this1.lat>0) {
		this1.point.style.top = ""+(265-res)+"px"
		if (this1.point.style.top===""+(265-(Math.round(+this1.lat))*3)+"px") {
			clearInterval(id)
		}
	}else {
			this1.point.style.top = ""+(265+res)+"px"
		if (this1.point.style.top===""+(265-(Math.round(+this1.lat))*3)+"px") {
			clearInterval(id)
		}
	}
	},10)
	})
}
		
	reset() {
		this.point.style.left = "536px";
		this.point.style.top = "265px";
		/*this.long = undefined;
		this.lat = undefined;*/
		this.point.style.display = "none";
		if (this.openweather) {
			this.openweather.remove()
		}
		
	}
	setWeather(param) {
		this.long = param.coord.lon
		this.lat = param.coord.lat
		this.h1 = document.createElement('h1');
		this.temperature = param.main.temp-273;
		this.pressure = param.main.pressure;
		this.windSpeed = param.wind.speed;
		this.weather = param.weather[0].description
		this.now = param.dt;
		this.time = new Date(param.dt*1000)
		this.hours = this.time.getHours();
		this.minutes = this.time.getMinutes();
		this.city_name = param.name;
		this.sunrise = param.sys.sunrise;
		this.sunset = param.sys.sunset;
		this.country = param.sys.country;

		this.openweather = document.createElement('div')
		this.openweather.style.position = "absolute";
		if (+this.long>0) {
			this.openweather.style.left = "0px";
		}else if (+this.long<0) {
			this.openweather.style.right = "0px";
		}
		this.openweather.style.width = "300px";
		this.openweather.style.height = "450px";
		this.openweather.style.background = "green"
		this.openweather.style.padding = "25px"
		this.map.append(this.openweather);

		this.header = document.createElement('div')
		this.openweather.append(this.header);
		this.header.innerText = this.city_name + "("+this.country+")";
		this.header.style.textAlign = "center";
		this.header.style.fontSize = "36px";
		this.header.style.fontFamily = "Roboto";
		this.header.style.color = "red"

		this.icon = document.createElement('div')
		this.openweather.append(this.icon);
		this.icon.style.margin = "0 auto"
		this.icon.style.width = "75px"
		this.icon.style.height = "75px";
		if (this.weather==="clear sky") {
			if (this.now>this.sunrise &&this.now < this.sunset) {
			this.icon.style.background = "url(http://openweathermap.org/img/w/01d.png) no-repeat 50% 50% / cover"
			}else{
			this.icon.style.background = "url(http://openweathermap.org/img/w/01n.png) no-repeat 50% 50% / cover"
			}
		}else if(this.weather==="few clouds") {
			if (this.now>this.sunrise &&this.now < this.sunset){
			this.icon.style.background = "url(http://openweathermap.org/img/w/02d.png) no-repeat 50% 50% / cover"
			}else {
				this.icon.style.background = "url(http://openweathermap.org/img/w/02n.png) no-repeat 50% 50% / cover"
			}
		}else if (this.weather==="scattered clouds") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/03d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==="broken clouds") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/04d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==="shower rain" ||this.weather==="light intensity shower rain") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/09d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==="rain") {
			if (this.now>this.sunrise &&this.now < this.sunset) {
			this.icon.style.background = "url(http://openweathermap.org/img/w/10d.png) no-repeat 50% 50% / cover"
			}else{
				this.icon.style.background = "url(http://openweathermap.org/img/w/10n.png) no-repeat 50% 50% / cover"
			}
		}else if (this.weather==="thunderstorm") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/11d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==="snow") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/13d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==="mist") {
			this.icon.style.background = "url(http://openweathermap.org/img/w/50d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==='overcast clouds') {
			this.icon.style.background = "url(http://openweathermap.org/img/w/04n.png) no-repeat 50% 50% / cover"
		}else if (this.weather==='light intensity drizzle') {
			this.icon.style.background = "url(http://openweathermap.org/img/w/09d.png) no-repeat 50% 50% / cover"
		}else if (this.weather==='light rain' || this.weather==='moderate rain' ) {
			if (this.now>this.sunrise &&this.now < this.sunset) {
			this.icon.style.background = "url(http://openweathermap.org/img/w/10d.png) no-repeat 50% 50% / cover"
			}else{
			this.icon.style.background = "url(http://openweathermap.org/img/w/10n.png) no-repeat 50% 50% / cover"
			}

		}

		this.dayNight = document.createElement('div')
		this.openweather.append(this.dayNight);
		this.body = document.getElementsByTagName('body')[0];
		if (this.now>this.sunrise &&this.now < this.sunset) {
			this.dayNight.innerText = "ДЕНЬ"
			this.dayNight.style.color = "yellow";
		}else{
			this.dayNight.innerText = "НОЧЬ"
			this.dayNight.style.color = "black";
		}
		this.dayNight.style.textAlign = "center";
		this.dayNight.style.fontSize = "12px";
		this.dayNight.style.fontFamily = "Roboto";
		this.dayNight.style.marginBottom = "15px"
		


		this.infoWeather = document.createElement('div')
		this.openweather.append(this.infoWeather);
		this.infoWeather.innerText = this.weather;
		this.infoWeather.style.textAlign = "center";
		this.infoWeather.style.fontSize = "18px";
		this.infoWeather.style.fontFamily = "Roboto";
		this.infoWeather.style.color = "black";

		this.infoTemperature = document.createElement('div')
		this.openweather.append(this.infoTemperature);
		this.infoTemperature.innerText = ""+Math.round(+this.temperature) + "° C";
		this.infoTemperature.style.textAlign = "center";
		this.infoTemperature.style.fontSize = "54px";
		this.infoTemperature.style.fontFamily = "Roboto";
		this.infoTemperature.style.color = "blue";

		this.otherInfo = document.createElement('div');
		this.openweather.append(this.otherInfo);
		this.otherInfo.style.textAlign = "left";
		this.otherInfo.style.marginTop = "50px";
		this.otherInfo.style.fontSize = "14px";
		this.otherInfo.style.fontFamily = "Roboto";
		this.otherInfo.style.color = "grey";
		this.otherInfo.innerText = `Долгота: ${this.long}\n
									  Широта: ${this.lat}\n
									  Скорость ветра: ${this.windSpeed}\n
									  Давление: ${this.pressure} \n
									  Текущее время: ${this.hours}:${this.minutes}`

		this.p_s = document.createElement('div');
		this.openweather.append(this.p_s);
		this.p_s.style.textAlign = "left";
		this.p_s.style.marginTop = "20px";
		this.p_s.style.fontSize = "9px";
		this.p_s.style.fontFamily = "Roboto";
		this.p_s.innerText = "P.S. Запрашиваемое место на карте обозначено красной точкой"
}



};

