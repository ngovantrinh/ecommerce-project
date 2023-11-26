(function () {
  console.log('ffffffffffffffffffffffffffffff');
  const tinyslider = function () {
    const el = document.querySelectorAll('.testimonial-slider');

    if (el.length > 0) {
      const slider = tns({
        container: '.testimonial-slider',
        items: 1,
        axis: 'horizontal',
        controlsContainer: '#testimonial-nav',
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false
      });
    }
  };
  tinyslider();

  const sitePlusMinus = function () {
    let value,
      quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
      const quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
      const increase = quantityContainer.getElementsByClassName('increase')[0];
      const decrease = quantityContainer.getElementsByClassName('decrease')[0];
      increase.addEventListener('click', function (e) {
        increaseValue(e, quantityAmount);
      });
      decrease.addEventListener('click', function (e) {
        decreaseValue(e, quantityAmount);
      });
    }

    function init() {
      for (const i = 0; i < quantity.length; i++) {
        createBindings(quantity[i]);
      }
    }

    function increaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      console.log(quantityAmount, quantityAmount.value);

      value = isNaN(value) ? 0 : value;
      value++;
      quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      value = isNaN(value) ? 0 : value;
      if (value > 0) value--;

      quantityAmount.value = value;
    }

    init();
  };
  sitePlusMinus();
})();
