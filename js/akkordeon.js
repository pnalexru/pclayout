const accordeon = () => {
	const contents = document.querySelectorAll('.program-line__content')

	contents.forEach((elem) => {
		const title = elem.querySelector('.program-line__title')
		const descr = elem.querySelector('.program-line__descr')

		title.addEventListener('click', () => {
			contents.forEach((e) => {
				e.querySelector('.program-line__descr').classList.remove('active')
			})
			descr.classList.toggle('active')
		})
	})
}

accordeon()
