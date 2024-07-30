import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

toastr.options = {
	"closeButton": true,
	"debug": false,
	"newestOnTop": false,
	"progressBar": true,
	"positionClass": "toast-top-center",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "3000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};

(() => {
	document.addEventListener('click', event => {
		if (event.target.classList.contains('toastr')) {
			toastr.info('This menu item is temporarily unavailable. Please select the Customers');
		}
		if (event.target.classList.contains('toaster-new')) {
			toastr.info('This menu item is already selected');
		}
	});
})();
