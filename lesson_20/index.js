'use strict';

import LocationApi from "./location_api.js"
import Dom from "./dom.js"

export let a = new LocationApi()
let b = new Dom()

let id = setInterval(function(){
	a.getMyIp()
	b.showPreloader()

	if (a.ip != undefined) {
		a.getMyLocation(a.ip)	
		clearInterval(id)			
	}
	
},10)


let id2 = setInterval(function(){
	if (a.country!=undefined) {
		b.hidePreloader()
		b.setCoordinates(a)
		clearInterval(id2)
	}
})







	
	


