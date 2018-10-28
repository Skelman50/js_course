'use strict';

import LocationApi from "./location_api.js"
import Dom from "./dom.js"

let a = new LocationApi()
let b = new Dom()

let c = new LocationApi()
let d = new Dom()

	b.showPreloader()
	
	let promise = new Promise(function(res,rej){
		res(a.getMyIp())
	})

.then((res) =>res.json())
.then((res)=>res.ip)
.then((res)=>a.getMyLocation(res))
.then((res)=>res.json())
.then((res)=>b.setCoordinates(res))
.then((res)=>b.hidePreloader())







	
	


