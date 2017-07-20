

const button = document.querySelector('.button')
console.log(button)
const menu =  document.querySelector('.menu')
const b1 =  document.querySelector('.b1')
const b2 =  document.querySelector('.b2')
const b3 =  document.querySelector('.b3')
const m1 =  document.querySelector('.m1')
const m2 =  document.querySelector('.m2')
const m3 =  document.querySelector('.m3')

	// button.addEventListener('click', function () {
	// 	menu.classList.toggle('.is-open') 

	// })

	button.addEventListener('click', function () {
	//if it does not have the class, 'is-open', add it
	//otherwise, remove it
	//check for a class with classList.containts('class')
	if (menu.classList.contains('is-open')) {
		menu.classList.remove('is-open')
	} else {
		menu.classList.add('is-open')
	}
})

	b2.addEventListener('click', function () {
	//if it does not have the class, 'is-open', add it
	//otherwise, remove it
	//check for a class with classList.containts('class')
	if (m2.classList.contains('is-open')) {
		m2.classList.remove('is-open')
	} else {
		m2.classList.add('is-open')
	}
})


	b3.addEventListener('click', function () {
	//if it does not have the class, 'is-open', add it
	//otherwise, remove it
	//check for a class with classList.containts('class')
	if (m3.classList.contains('is-open')) {
		m3.classList.remove('is-open')
	} else {
		m3.classList.add('is-open')
	}
})


		// 	contentNode.classList.toggle('.hide-content') 


