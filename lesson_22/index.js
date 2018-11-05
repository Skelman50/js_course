'use strict';

const main = document.getElementsByClassName('main')[0];
const new_todo = document.getElementsByClassName('new-todo')[0];
const todoList = document.getElementsByClassName('todo-list')[0];
const clear = document.getElementsByClassName('clear-completed')[0];
const checkedAll = document.getElementsByClassName('toggle-all')[0];
let todoCount= document.getElementsByClassName('todo-count')[0];
const body = document.getElementsByTagName('body')[0]
let li_length;
let countChecked = 0;


function countTodo() {
	let element = document.getElementsByClassName("lists")
	let checkbox = document.getElementsByClassName("toggle")
	let count = 0;
	for(let i = 0; i < element.length; i++) {
		if (!checkbox[i].checked) {
			count++
		}
	}
	  todoCount.innerText = `${count} ${count===1?" item":" items"} left`
}

function setFocus()
{
	 document.getElementById("focus").style.display = "block"
     document.getElementById("focus").focus();
}

function hash() {
		if (window.location.hash === '#/completed') {
			let element = document.getElementsByClassName("lists")
			let checkbox = document.getElementsByClassName("toggle")
			for(let i = 0; i<element.length;i++){
				if (!checkbox[i].checked) {
					element[i].style.display = "none"
				}else {
					element[i].style.display = "block"
				}
			}
		}else if (window.location.hash === '#/') {
			let element = document.getElementsByClassName("lists")
			let checkbox = document.getElementsByClassName("toggle")
			for(let i = 0; i<element.length;i++){
				element[i].style.display = "block"
			}
		}else if (window.location.hash === '#/active') {
			let element = document.getElementsByClassName("lists")
			let checkbox = document.getElementsByClassName("toggle")
			for(let i = 0; i<element.length;i++){
				if (checkbox[i].checked) {
					element[i].style.display = "none";
				}else{
					element[i].style.display = "block";
				}
			}
		}
}

function toClear(){
	let element = document.getElementsByClassName("lists")
	let checkbox = document.getElementsByClassName("toggle")

	for(let i = 0; i<element.length; i++) {
		if (checkbox[i].checked) {
			clear.style.display = "block";
			break;
		}else{
			clear.style.display = "none";
		}
	}
}



new_todo.addEventListener('keydown', function(e){
	if(e.keyCode===13 && e.target.value.trim().length) {
	main.style.display = "block";

	let element = document.createElement('li')
	let div = document.createElement('div')
	let toggle = document.createElement('input')
	let label = document.createElement('label')
	let button = document.createElement('button');

	todoList.append(element)
	div.className = "view";
	element.append(div)
	toggle.className = "toggle";
	toggle.type = "checkbox";
	div.append(toggle)
	div.append(label);
	label.innerText = new_todo.value
	button.className = "destroy";
	div.append(button);
	div.style.position = "relative"
	element.setAttribute("data-text", new_todo.value)
	element.className = "lists";
	todoList.append(element);
	new_todo.value = "";
	

	li_length = document.getElementsByClassName("lists")
	let li = document.getElementsByClassName("lists")[li_length.length-1];
	let destroy = document.getElementsByClassName("destroy")[li_length.length-1]
	let view = document.getElementsByClassName('view')[li_length.length-1]
	

		toggle.addEventListener('change', function(){
		countChecked = 0;
		if (toggle.checked) {
			element.classList.add('completed')
		}else{
			element.classList.remove('completed');
		}
		hash()
		toClear()
		countTodo()
	})
	
	destroy.addEventListener("click", function(){
		li.remove()
		countTodo()
	})

	label.addEventListener('dblclick',function(){
		if (element.className==="lists") {
			let input = document.createElement('input')
			input.type="text";
			input.id = "focus";
			input.style.position = 'absolute';
			input.style.width = '85%';
			input.style.height = '90%';
			input.style.fontSize = "25px"
			input.style.left = '10%';
			input.style.top = '0'
			input.value = label.innerText;
			label.append(input);
			setFocus()
			button.style.transform = "scale(0)";
			toggle.style.display="none";

			input.addEventListener('keydown',function(e){
				if (e.keyCode===13) {
					if (input.value.trim()) {
					label.innerText = input.value
					input.remove()
					button.style.transform = "scale(1)";
					toggle.style.display="block";
					}else {
					element.remove()
					}
					countTodo()
					hash()
				}
			})

			document.addEventListener('click',function(e){
				
				if (e.target.id != "focus") {
					if (input.value.trim()) {
					label.innerText = input.value
					input.remove()
					button.style.transform = "scale(1)";
					toggle.style.display="block";
					}else {
					element.remove()
					}
					countTodo()
					hash()
				}
			})
		}
	})

	countTodo()
	hash()
	toClear()
	}	
});

window.addEventListener('hashchange', hash)

clear.addEventListener('click',function(){
	let toClearArr = [];
		let element = document.getElementsByClassName("lists")
			let checkbox = document.getElementsByClassName("toggle")
			for(let i = 0; i<element.length;i++){
				if (checkbox[i].checked) {
					toClearArr.push(element[i])
				}
			}
			for(let i = 0; i < toClearArr.length; i++) {
				toClearArr[i].remove();
			}
			toClear()
});


checkedAll.addEventListener('click', function(){
	let element = document.getElementsByClassName("lists")
	let checkbox = document.getElementsByClassName("toggle")
if (countChecked!=element.length) {
	for(let i=0; i<element.length; i++) {
		
		if (checkbox[i].checked) {
			countChecked++
			element[i].classList.add('completed')
			
			
		}else if (!checkbox[i].checked) {
			checkbox[i].checked = true;	
			countChecked++
			element[i].classList.add('completed');
			
		}
		toClear()
		countTodo()
	}

}else if (countChecked===element.length) {
		for (let i = 0; i<element.length; i++) {
			checkbox[i].checked = false
			element[i].classList.remove('completed');
		}
		countChecked=0;
		toClear()
		countTodo()
	}
})

	
