import React, { useEffect } from 'react';

function useDetailProduct() {
  useEffect(() => {
    const singleProduct = {
      init: function () {
        this.zoom();
        this.tab();
      },
      zoom: function () {
        //Zoom Ảnh sản phẩm
        const image = document.querySelector('.signleProduct__content .image');
        if (image == null) return;

        image.addEventListener('mousemove', (e) => {
          let x = e.offsetX; //lấy vị trí chuột toạ độ X
          let y = e.offsetY; //lấy vị trí chuột toạ độ Y
          image.style.backgroundSize = '200%';
          image.style.backgroundPosition = `-${x}px -${y}px`;
        });
        image.addEventListener('mouseleave', (e) => {
          image.style.backgroundSize = '100%';
          image.style.backgroundPosition = `center`;
        });
      },
      tab: function () {
        const btnTab = document.querySelectorAll('.singleDes .tabs a');
        const tab = document.querySelectorAll('.singleDes .item');

        btnTab.forEach((item, index) =>
          item.addEventListener('click', (e) => {
            btnTab.forEach((i) => i.classList.remove('active'));
            e.target.classList.add('active');
            let id = index;

            tab.forEach((tb) => tb.classList.remove('active'));
            tab[id].classList.add('active');
          })
        );
      }
    };
    singleProduct.init();
  }, []);
}

export default useDetailProduct;
