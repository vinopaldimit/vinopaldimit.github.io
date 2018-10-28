const { scrollRight, onRightButton, scrollLeft, 
	onLeftButton, openModal, onOpenModal, closeModal,
	onCloseModal, toggleDisplay, onToggleButton } = require('../js/dom.js')

//project carousel
describe('project carousel', () => {
	// Arrange
	const section = document.createElement('section')

	const leftButton = document.createElement('button')
	leftButton.classList.add('leftButton')
	const rightButton = document.createElement('button')
	rightButton.classList.add('rightButton')

	const carousel = document.createElement('div')
	carousel.classList.add('carousel')

	const article1 = document.createElement('article')
	const article2 = document.createElement('article')
	const article3 = document.createElement('article')

	article1.classList.add('current')
	article1.classList.add('slide')
	article2.classList.add('slide')
	article3.classList.add('slide')

	carousel.appendChild(article1)
	carousel.appendChild(article2)
	carousel.appendChild(article3)
	section.appendChild(leftButton)
	section.appendChild(rightButton)
	section.appendChild(carousel)
	
	const slides = carousel.querySelectorAll('.slide')

	describe('scrollRight', () => {	
		test('should change current to next', () => {
			// Act
			scrollRight(slides)
			
			// Assert
			expect(article2.classList.contains('current')).toBeTruthy()
		})

		test('should remove current from previous', () => {
			// Act
			scrollRight(slides)
			
			// Assert
			expect(article1.classList.contains('current')).toBeFalsy()
		})
	})

	describe('clickRightButton', () => {
		test('should scroll right on click', () => {
			// Act
			onRightButton(rightButton, slides)
			rightButton.click()
			
			// Assert
			expect(article1.classList.contains('current')).toBeFalsy()
		})
	})

	describe('scrollLeft', () => {	
		test('should change current to next', () => {
			// Act
			scrollLeft(slides)
			
			// Assert
			expect(article3.classList.contains('current')).toBeTruthy()
		})

		test('should remove current from previous', () => {
			// Act
			scrollLeft(slides)
			
			// Assert
			expect(article1.classList.contains('current')).toBeFalsy()
		})
	})

	describe('clickLeftButton', () => {
		test('should scroll left on click', () => {
			// Act
			onLeftButton(leftButton, slides)
			leftButton.click()
			
			// Assert
			expect(article1.classList.contains('current')).toBeFalsy()
		})
	})
})

describe('skills modal', () => {
	//Arrange
	const openButton = document.createElement('button')
	openButton.classList.add('modalTrigger')
	const div = document.createElement('div')
	div.classList.add('modal')
	const closeButton = document.createElement('button')
	closeButton.classList.add('close')
	const ul = document.createElement('ul')

	div.appendChild(ul)
	div.appendChild(closeButton)

	div.style.display = 'none'

	describe('openModal', () => {	
		test('should open modal', () => {
			// Act
			openModal(div)
			
			// Assert
			expect(div.style.display==='none').toBeFalsy()
		})
	})

	describe('clickOpenModal', () => {	
		test('should open modal on click', () => {
			// Act
			onOpenModal(openButton, div)
			
			// Assert
			expect(div.style.display==='none').toBeFalsy()
		})
	})

	div.style.display = 'block'

	describe('closeModal', () => {	
		test('should close modal', () => {
			// Act
			closeModal(div)
			
			// Assert
			expect(div.style.display==='none').toBeTruthy()
		})
	})

	describe('clickCloseModal', () => {	
		test('should open modal on click', () => {
			// Act
			onCloseModal(closeButton, div)
			
			// Assert
			expect(div.style.display==='none').toBeTruthy()
		})
	})

})

describe('skills modal', () => {
	//Arrange
	const button = document.createElement('button')
	button.classList.add('openDesc')
	const desc = document.createElement('p')
	desc.classList.add('desc')
	desc.style.display = 'block'

	describe('toggleDisplay', () => {	
		test('should toggle to display none', () => {
			// Act
			toggleDisplay(desc)
			
			// Assert
			expect(desc.style.display==='none').toBeTruthy()
		})

		test('should toggle to display block', () => {
			// Act
			toggleDisplay(desc)
			
			// Assert
			expect(desc.style.display==='block').toBeTruthy()
		})
	})

	describe('onToggleButton', () => {	
		test('should toggle to display none', () => {
			// Act
			onToggleButton(button, desc)
			button.click()
			
			// Assert
			expect(desc.style.display==='none').toBeTruthy()
		})

		
	})
})