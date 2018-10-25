
export default class Dom {
	constructor(){
		this.body = document.getElementsByTagName('body')[0];
		this.preloader = document.createElement('div');
		this.load = document.createElement('div');
		
	}
	showPreloader(){
		
			let this1 = this;
			this.body.append(this.preloader)
			this.preloader.style.fontSize = "5px"
			this.preloader.append(this.load)
			this.preloader.style.width="50px";
			this.preloader.style.height="50px";
			this.preloader.style.border="15px solid black"
			this.preloader.style.borderRadius = '50%'
			this.load.style.width="50px";
			this.load.style.height="50px";
			this.load.style.borderBottom="5px solid red"
			this.load.style.borderRadius = '50%';
			let sec = 0
			this.id = setInterval(function(){
				sec = sec + 20
				this1.load.style.transform = `rotate(${sec}deg)`
			},50)
	}
	hidePreloader(){
		this.preloader.remove()
		
	}
	setCoordinates(coordinates) {
		this.h1 = document.createElement('h1');
		this.body.append(this.h1)
		this.h1.innerText = `Страна: ${coordinates.country_name} \n
							Город: ${coordinates.city} \n
							Широта: ${coordinates.latitude} \n
							Долгота: ${coordinates.longitude} \n
							IP: ${coordinates.ip}`
	}
};

