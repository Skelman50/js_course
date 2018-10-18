'use strict';


new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve({isAuth:true})
	},2000);
})
.then((authInfo)=>new Promise(function(resolve,reject){
	if (!authInfo.isAuth) {
		reject(null)
	}else{
	setTimeout(function(){
		resolve({name:"Max"})
	},2000);
}
}))
.then((user)=>console.log(user.name))
.catch((err)=>err);



