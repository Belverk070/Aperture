;(function () {
	let menuBtn = document.querySelector(".menu-btn")
	let menu = document.querySelector(".menu")
	let menuItem = document.querySelectorAll(".menu__item")
	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("menu__active")
		menuBtn.classList.toggle("active")
	})
	if (window.innerWidth <= 767) {
		for (let i = 0; i < menuItem.length; i += 1) {
			menuItem[i].addEventListener("click", () => {
				menu.classList.remove("menu__active")
				menuBtn.classList.remove("active")
			})
		}
	}
})()
;(function () {
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector(".header").clientHeight
		let target = document.querySelector(targetEl)
		let targetPosition = target.getBoundingClientRect().top - headerElHeight
		let startPosition = window.scrollY
		let startTime = null

		const ease = function (t, b, c, d) {
			t /= d / 2
			if (t < 1) return (c / 2) * t * t + b
			t--
			return (-c / 2) * (t * (t - 2) - 1) + b
		}

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime
			const timeElapsed = currentTime - startTime
			const run = ease(timeElapsed, startPosition, targetPosition, duration)
			window.scrollTo(0, run)
			if (timeElapsed < duration) requestAnimationFrame(animation)
		}
		requestAnimationFrame(animation)
	}

	const scrollTo = function () {
		const links = document.querySelectorAll(".js-scroll")
		links.forEach((each) => {
			each.addEventListener("click", function () {
				const currentTarget = this.getAttribute("href")
				smoothScroll(currentTarget, 1000)
			})
		})
	}
	scrollTo()
})()
