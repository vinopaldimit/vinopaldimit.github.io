const rightButton = document.querySelector('.rightButton')
const leftButton = document.querySelector('.leftButton')
const slides = document.querySelectorAll('.slide')

//const skillModal = document.querySelector('.skillModal')
//const openModalButton = document.querySelector('.skillModalOpen')
//const closeModalButton = document.querySelector('.skillModalClose')

//const toggleButton = document.querySelector('.descOpen')
//const desc = document.querySelector('.desc')
//const toggleButton2 = document.querySelector('.descOpen2')
//const desc2 = document.querySelector('.desc2')
//const toggleButton3 = document.querySelector('.descOpen3')
//const desc3 = document.querySelector('.desc3')

main()

function main() {
	createEventListeners()
}

function createEventListeners() {
	onRightButton(rightButton, slides)
	onLeftButton(leftButton, slides)

	//onOpenModal(openModalButton, skillModal)
	//onCloseModal(closeModalButton, skillModal)

	//onToggleButton(toggleButton, desc)
	//onToggleButton(toggleButton2, desc2)
	//onToggleButton(toggleButton3, desc3)
}