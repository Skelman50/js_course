
export default class Dom {
	constructor(){
		
	}
	showPreloader(){
			this.body = document.getElementsByTagName('body')[0];
			this.load = document.createElement('div');
			this.load_1 = document.createElement('div');
			this.body.append(this.load)
			this.load.append(this.load_1)
			let this1 = this;
			this.load.style.width="150px";
			this.load.style.height="20px";
			this.load.style.border="2px solid black";
			this.load.style.marginBottom="15px";
			this.load.style.position = "relative";
			this.load.style.overflow = "hidden";
			this.load_1.style.width="30px";
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

