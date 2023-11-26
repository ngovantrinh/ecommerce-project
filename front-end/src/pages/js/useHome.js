import { useEffect } from 'react';

const useHome = () => {
  useEffect(() => {
    const loader = {
      init: function () {
        this.loading();
      },
      loading: function () {
        const loader = document.querySelector('.loader');

        function hide() {
          loader.classList.add('hide');
        }

        setTimeout(hide, 10);
      }
    };
    loader.init();

    const slider = {
      init: function () {
        this.slide();
        this.changeImage('.firstSlide');
        this.changeImage('.secondSlide');
      },
      slide: function () {
        const circleBtn = document.querySelectorAll('.circle span');
        const wrap = document.querySelector('.banner .slider');
        const item = document.querySelectorAll('.banner .slider__item');
        const leftBtn = document.querySelector('.banner .buttonLeft');
        const rightBtn = document.querySelector('.banner .buttonRight');

        if (item.length === 0) return;
        let size = item[0].offsetWidth;
        let count = 0;

        circleBtn.forEach((btn) =>
          btn.addEventListener('click', (e) => {
            circleBtn.forEach((i) => i.classList.remove('active'));
            e.target.classList.add('active');

            let index = e.target.dataset.slide;

            item.forEach((it) => it.classList.remove('active'));
            item[index].classList.add('active');

            wrap.style.scrollBehavior = 'smooth';
            wrap.scrollLeft = size * index;
          })
        );

        leftBtn.addEventListener('click', () => {
          if (count == 0) return;
          count--;

          item.forEach((it) => it.classList.remove('active'));
          item[count].classList.add('active');

          wrap.style.scrollBehavior = 'smooth';
          wrap.scrollLeft = size * count;
        });

        rightBtn.addEventListener('click', () => {
          if (count >= item.length - 1) return;
          count++;

          item.forEach((it) => it.classList.remove('active'));
          item[count].classList.add('active');

          wrap.style.scrollBehavior = 'smooth';
          wrap.scrollLeft = size * count;
        });
      },
      changeImage: function (e) {
        const self = document.querySelector(e);
        if (self == null) return;

        const buttonChange = self.querySelectorAll('.changeImage');
        const mainImage = self.querySelector('.switchImage');

        buttonChange.forEach((btn) =>
          btn.addEventListener('click', (e) => {
            const src = e.target.dataset.image;
            mainImage.style.animation = 'fadeInRight 1s ease-out forwards';
            setTimeout(() => {
              mainImage.style.animation = '';
            }, 1000);
            mainImage.src = src;
          })
        );
      }
    };
    slider.init();
  }, []);
};
export default useHome;
