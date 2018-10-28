/*CAROUSEL*/
function scrollRight(slides) {
	let previous, next;
	let i = 0;
	slides.forEach(slide => {
		i++;
		if(slide.classList.contains('current')) {
			previous = slide
			j = i;
		}
	})

	if(j === slides.length){
		next = slides[0]
	} else{
		next = previous.nextElementSibling
	}

	previous.classList.remove('current')
	next.classList.add('current')
}

function scrollLeft(slides) {
	let previous, next;
	let i = 0;
	let j = 0;
	slides.forEach(slide => {
		i++
		if(slide.classList.contains('current')) {
			previous = slide
			j = i;
		}
	})

	if(j === 1){
		next = slides[slides.length-1]
	} else{
		next = previous.previousElementSibling
	}

	previous.classList.remove('current')
	next.classList.add('current')
}

function onRightButton(rightButton, slides) {
	on(rightButton, 'click', event => {
		scrollRight(slides)
	})
}

function onLeftButton(leftButton, slides) {
	on(leftButton, 'click', event => {
		scrollLeft(slides)
	})
}

/*MODAL&EXPAND*/
function openModal(modal){
	modal.style.display = 'block';
}

function onOpenModal(button, modal){
	on(button, 'click', event => {
		openModal(modal)
	})
}

function closeModal(modal){
	modal.style.display = 'none';
}

function onCloseModal(button, modal){
	on(button, 'click', event => {
		closeModal(modal)
	})
}

//TOGGLE DESC
function toggleDisplay(desc){
	if(desc.style.display === 'none'){
		desc.style.display = 'block'
	} else{
		desc.style.display = 'none'
	}
}

function onToggleButton(button, desc){
	on(button, 'click', event => {
		toggleDisplay(desc)
	})
}

// Generic event listener factory
function on(element, eventType, callback) {
	element.addEventListener(eventType, callback)
}


module.exports = {
	scrollRight,
	onRightButton,
	scrollLeft,
	onLeftButton,
	openModal,
	onOpenModal,
	closeModal,
	onCloseModal,
	toggleDisplay,
	onToggleButton
}