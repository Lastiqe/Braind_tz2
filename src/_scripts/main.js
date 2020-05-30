import $ from 'jquery';
(function () {
	let temps = 0
	function addToCartHanlder() {
		let $btns = $('[data-add-to-cart]');
		let $clickedBtn

		$btns.on('click', function (e) {
			e.preventDefault();
			$clickedBtn = $(`[data-add-to-cart = ${e.currentTarget.dataset.addToCart}]`)
			console.log($clickedBtn);


			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'json',
				success: (res) => {
					if (res.success) {
						temps += res.count
						$clickedBtn
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');
						$('[data-cart-count]').text(temps);
					}
				}
			});
		});
	};

	function main() {
		addToCartHanlder();
	};

	main();
}());

