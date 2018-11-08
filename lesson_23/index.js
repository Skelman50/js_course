'use strict';

let word = document.getElementById("word")
let width = document.getElementById("width")
let height = document.getElementById("height")
let search = document.getElementById("search")
search.disabled = true	
let div = document.getElementById("imgcont")



word.addEventListener('input', function(){
	
	if (word.value.length>=2 && +width.value >50 && +width.value <=500 && +height.value >50 && +height.value <=500 ) {
		search.disabled = false
	}
	if (word.value.length<2) {
		word.style.border = "1px solid red";
		word.style.outlineColor = "red";
		search.disabled = true;
	}else{
		word.style.border = "1px solid grey";
		word.style.outlineColor = "green";
	}
})

width.addEventListener('input',function(){
	if (word.value.length>=2 && +width.value >50 && +width.value <=500 && +height.value >50 && +height.value <=500 ) {
		search.disabled = false;
	}
	if (+width.value >=50 && +width.value <=500) {
		width.style.border = "1px solid grey";
		width.style.outlineColor = "green";
	}else {
		width.style.border = "1px solid red";
		width.style.outlineColor = "red";
		search.disabled = true;
	}
})

height.addEventListener('input', function(){
	if (word.value.length>=2 && +width.value >50 && +width.value <=500 && +height.value >50 && +height.value <=500 ) {
		search.disabled = false
	}
	if (height.value >=50 && height.value <=500) {
		height.style.border = "1px solid grey"
		height.style.outlineColor = "green"
	}else {
		height.style.border = "1px solid red"
		height.style.outlineColor = "red"
		search.disabled = true;
	}
})

	search.addEventListener('click', function(){
		let value = word.value.split(' ').join('+')
		new Promise(function(res,rej){
			word.disabled=true;
			search.disabled=true;
			width.disabled=true;
			height.disabled=true;
			div.innerText = "Loading...";
			div.style.fontSize = "50px";
			res(fetch (`https://api.datamuse.com/words?ml=${value}`));
		})
		.then(res => res.json())
		.then(res=>{
				if (res.length===0) {
					div.innerText = "";
				let img = document.createElement('img');
					div.append(img);
					img.src = `https://dummyimage.com/${width.value}x${height.value}/000/fff&text=word not found`	
					
				}else{
					
				let img = document.createElement('img');
					img.style.margin = "10px";
					img.style.display = "block";
					img.src = `https://dummyimage.com/${width.value}x${height.value}/000/fff&text=${word.value}`
					div.innerText = "";
					div.append(img);
				for (let i = 0;i<10;i++) {
					let img = document.createElement('img');
					img.src = `https://dummyimage.com/${width.value}x${height.value}/000/fff&text=${res[i].word}`
					div.append(img);
					img.style.display = "block";
					img.style.margin = "10px";

				}
			}
					
		})
		.then(res=> {
					word.disabled=false;
					search.disabled=false;
					width.disabled=false;
					height.disabled=false;
		})
	})
