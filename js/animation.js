const animtion = () => {
	const courseBlock = document.querySelector('.course__wrap')
	const courseProgress = document.querySelector('.course__progress')
	const courseProgressLine = courseProgress.querySelector(
		'.course__progress-element'
	)
	const lineProgress = courseProgressLine.querySelector('progress')
	const courseNumber = courseProgress.querySelector('.course__number')

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const MAX_COUNT = getRandomInt(350000, 600000)
	let flagAnim = false

	const animCount = () => {
		let i = 0
		const countInterval = setInterval(() => {
			if (i < MAX_COUNT - 1111) {
				courseNumber.textContent = i
				lineProgress.value = i
				i = i + 1111
			} else if (i <= MAX_COUNT) {
				courseNumber.textContent = i
				lineProgress.value = i
				i = i + 1
			} else {
				clearInterval(countInterval)
			}
		}, 1)
	}

	document.addEventListener('scroll', () => {
		const axisCourseBlock = courseBlock.getBoundingClientRect().top
		const centerWindow = window.innerHeight / 3 // 1/3 высоты окна приблизительно визуальный центр

		if (
			axisCourseBlock > centerWindow &&
			axisCourseBlock < window.innerHeight - centerWindow &&
			!flagAnim
		) {
			animCount()
			flagAnim = true
		}
	})
}

animtion()
