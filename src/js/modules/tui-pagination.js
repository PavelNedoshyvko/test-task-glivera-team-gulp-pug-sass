import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const totalItems = 40;

const container = document.getElementById('pagination');
const options = {
	totalItems: totalItems,
	itemsPerPage: 1,
	visiblePages: 4,
	centerAlign: false,
	firstItemClassName: 'tui-first-child',
	lastItemClassName: 'tui-last-child',
	template: {
		page: '<a href="#" class="tui-page-btn">{{page}}</a>',
		currentPage:
			'<strong class="tui-page-btn tui-is-selected pagination-btn">{{page}}</strong>',
		moveButton:
			'<a href="#" class="tui-page-btn tui-{{type}}">' +
			'<span class="tui-ico-{{type}}">{{type}}</span>' +
			'</a>',
		disabledMoveButton:
			'<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
			'<span class="tui-ico-{{type}}">{{type}}</span>' +
			'</span>',
		moreButton:
			'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
			'<span class="tui-ico-ellip">...</span>' +
			'</a>'
	}
}

const pagination = new Pagination(container, options);








