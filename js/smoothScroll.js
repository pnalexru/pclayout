const smoothScroll = () => {
	const navbar = document.querySelector('.header__nav')
	const links = navbar.querySelectorAll('a')

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const section = document.querySelector(link.getAttribute('href'))
			if (section) {
				section.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
		})
	})
}

smoothScroll()
