import $ from 'jquery';
import Pagination from 'paginationjs';
import 'paginationjs/dist/pagination.css';

// Убедитесь, что jQuery доступен глобально для paginationjs
window.$ = $;
window.jQuery = $;

$(document).ready(function () {
	const pagination = new Pagination('#pagination-container', {
		dataSource: Array.from({ length: 100 }), // Замените на свой источник данных
		pageSize: 10,
		callback: function (data, pagination) {
			console.log(data, pagination);
		}
	});
});