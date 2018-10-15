'use strict';



let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let text = document.getElementById('text');
let after = document.getElementById('after');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');

let bcgKrest = 'url(krestik.png) no-repeat 50% 50% / cover';
let x = 'url("krestik.png") 50% 50% / cover no-repeat'
let bcgNol = 'url(nolik.jpg) no-repeat 50% 50% / cover';
let y = 'url("nolik.jpg") 50% 50% / cover no-repeat'

  	  s1.style.background = 'rgba(100, 52, 122, 0.0)';
	  s2.style.background = 'rgba(101, 52, 122, 0.0)';
	  s3.style.background = 'rgba(102, 52, 122, 0.0)';
	  s4.style.background = 'rgba(103, 52, 122, 0.0)';
	  s5.style.background = 'rgba(104, 52, 122, 0.0)';
	  s6.style.background = 'rgba(105, 52, 122, 0.0)';
	  s7.style.background = 'rgba(106, 52, 122, 0.0)';
	  s8.style.background = 'rgba(107, 52, 122, 0.0)';
	  s9.style.background = 'rgba(108, 52, 122, 0.0)';


	let btn = document.createElement('button')
	after.append(btn)
	btn.innerText = "Сначала"
	btn.addEventListener('click',function(){
		location.reload()
	
	});
radio1.checked = true;


setInterval(function() {
if(radio1.checked) {
function bcgKrestikS1() {
	s1.style.background = bcgKrest;
	radio2.checked = true;
 };

function bcgKrestikS2 ()  {
	s2.style.background = bcgKrest;
	radio2.checked = true;
};

function bcgKrestikS3() {
	s3.style.background = bcgKrest;
	radio2.checked = true;
		
};

function bcgKrestikS4() {
	s4.style.background = bcgKrest;
	radio2.checked = true;
	
};

function bcgKrestikS5() {
	s5.style.background = bcgKrest;
	radio2.checked = true;
	
};

function bcgKrestikS6() {
	s6.style.background = bcgKrest;
	radio2.checked = true;
	
};

function bcgKrestikS7() {
	s7.style.background = bcgKrest;
	radio2.checked = true;
		
};

function bcgKrestikS8() {
	s8.style.background = bcgKrest;
	radio2.checked = true;
	
	
};

function bcgKrestikS9() {
	s9.style.background = bcgKrest;
	radio2.checked = true;
	
};
  s1.addEventListener('click', bcgKrestikS1);
  s2.addEventListener('click', bcgKrestikS2);
  s3.addEventListener('click', bcgKrestikS3);
  s4.addEventListener('click', bcgKrestikS4);
  s5.addEventListener('click', bcgKrestikS5);
  s6.addEventListener('click', bcgKrestikS6);
  s7.addEventListener('click', bcgKrestikS7);
  s8.addEventListener('click', bcgKrestikS8);
  s9.addEventListener('click', bcgKrestikS9);


} else if(radio2.checked) { 

function bcgNolikS1() {
	s1.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
 	radio1.checked = true;

};

function bcgNolikS2() {
	s2.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;
	
};

function bcgNolikS3() {
	s3.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;
	
};

function bcgNolikS4() {
	s4.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;
	
};

function bcgNolikS5() {
	s5.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;
	
};

function bcgNolikS6() {
	s6.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;

	
};

function bcgNolikS7() {
	s7.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;
	
};

function bcgNolikS8() {
	s8.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;


};

function bcgNolikS9() {
	s9.style.background = "url(nolik.jpg) no-repeat 50% 50% / cover";
	radio1.checked = true;

};

 s1.addEventListener('click', bcgNolikS1);
  s2.addEventListener('click', bcgNolikS2);
 s3.addEventListener('click', bcgNolikS3);
  s4.addEventListener('click', bcgNolikS4);
 s5.addEventListener('click', bcgNolikS5);
 s6.addEventListener('click', bcgNolikS6);
 s7.addEventListener('click', bcgNolikS7);
 s8.addEventListener('click', bcgNolikS8);
 s9.addEventListener('click', bcgNolikS9);

}
  	if((s1.style.background === x && s2.style.background ===x && s3.style.background === x) || 
  		(s1.style.background === x && s5.style.background ===x && s9.style.background === x) || 
  		(s1.style.background === x && s4.style.background ===x && s7.style.background===x) ||
  		(s2.style.background === x && s5.style.background ===x && s8.style.background===x) ||
  		(s3.style.background === x && s6.style.background ===x && s9.style.background===x)||
  		(s4.style.background === x && s5.style.background ===x && s6.style.background===x) ||
  		(s3.style.background === x && s5.style.background ===x && s7.style.background===x) ||
  		(s7.style.background === x && s8.style.background ===x && s9.style.background===x)) {
	  setTimeout(function() {
	  alert( "А победили крестики")
	  location.reload()
		},1000)
	}else if((s1.style.background === y && s2.style.background ===y && s3.style.background === y) || 
  		(s1.style.background === y && s5.style.background ===y && s9.style.background === y) || 
  		(s1.style.background === y && s4.style.background ===y && s7.style.background===y) ||
  		(s2.style.background === y && s5.style.background ===y && s8.style.background===y) ||
  		(s3.style.background === y && s6.style.background ===y && s9.style.background===y)||
  		(s4.style.background === y && s5.style.background ===y && s6.style.background===y) ||
  		(s3.style.background === y && s5.style.background ===y && s7.style.background===y) ||
  		(s7.style.background === y && s8.style.background ===y && s9.style.background===y)) {
	  setTimeout(function() {
	  alert( "А победили нолики")
	  location.reload()
		},1000)
	}


},100)
