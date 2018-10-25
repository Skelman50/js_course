
export default class Dom {
	constructor(){
		this.body = document.getElementsByTagName('body')[0];
		this.load = document.createElement('div');
		this.body.append(this.load)
		
	}
	showPreloader(){
		
			let this1 = this;
			this.load.style.width="100px";
			this.load.style.height="100px";
			this.load.style.background="url(spin.svg) no-repeat 50% 50%/cover"
			this.load.style.borderRadius = '50%';
			let sec = 0
			this.id = setInterval(function(){
				sec = sec + 20
				this1.load.style.transform = `rotate(${sec}deg)`
			},50)
	}
	hidePreloader(){
		this.load.remove()
		
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

