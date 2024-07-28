import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination-container');
const options = {
	totalItems: 100,
	itemsPerPage: 10,
	visiblePages: 4
};
const instance = new Pagination(container, options);

instance.getCurrentPage();