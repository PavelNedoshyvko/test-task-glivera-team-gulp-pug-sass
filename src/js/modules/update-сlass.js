// function updateClassBasedOnViewportWidth() {
// 	const element = document.querySelector('.your-element-class');

// 	if (window.innerWidth < 600) {
// 		element.classList.add('narrow-view');
// 		element.classList.remove('wide-view');
// 	} else {
// 		element.classList.add('wide-view');
// 		element.classList.remove('narrow-view');
// 	}
// }

// updateClassBasedOnViewportWidth();

// window.addEventListener('resize', updateClassBasedOnViewportWidth);





document.addEventListener('DOMContentLoaded', function () {
	const updateClasses = () => {
		const links = document.querySelectorAll('.sidebar__dashboard-link');
		links.forEach(link => {
			const index = parseInt(link.getAttribute('data-index'), 10);
			if (index === 1) {
				if (window.innerWidth > 1440) {
					link.classList.add('toaster-new');
					link.classList.remove('js-close-menu', 'toastr');
				} else {
					link.classList.add('js-close-menu');
					link.classList.remove('toaster-new', 'toastr');
				}
			} else {
				link.classList.add('toastr');
				link.classList.remove('toaster-new', 'js-close-menu');
			}
		});
	};

	// Initial check
	updateClasses();

	// Update on window resize
	window.addEventListener('resize', updateClasses);
});
