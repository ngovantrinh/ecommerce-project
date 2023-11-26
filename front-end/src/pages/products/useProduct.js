import { useSnackbar } from 'notistack5';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KEY_QUERIES } from 'src/constant';
import ProductService from 'src/services/product';
import useCart from '../cart/useCart';
import CartService from 'src/services/cart';

const DEFAULT_LIMIT = 10;
const DEFAULT_CURRENT_PAGE = 1;

function useProduct({ limitItem = DEFAULT_LIMIT }) {
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const searchName = searchParams.get('keyword') || '';
  const [listProduct, setListProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const page = searchParams.get(KEY_QUERIES.PAGE) || DEFAULT_CURRENT_PAGE;
  const limit = searchParams.get(KEY_QUERIES.LIMIT) || limitItem;

  const fetchProducts = useCallback(
    async ({ params = {} }) => {
      try {
        setLoading(true);
        const res = await ProductService.getAllProduct({ keyword: searchName, page, limit, ...params });
        const products = res?.data?.newData || [];
        setListProduct(products);
        console.log(products, 'products');
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [searchName]
  );

  const handleDeleteProduct = async (id) => {
    const res = await ProductService.removeProduct(id);
    await fetchProducts({});
    if (res?.success) {
      enqueueSnackbar('Remove product success', { variant: 'warning' });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async () => {
    fetchProducts({});
  }, [fetchProducts]);

  useEffect(() => {
    const shopProduct = {
      init: function () {
        this.sideBar();

        this.changeLayout();
      },

      sideBar: function () {
        const open = document.querySelector('.buttonSidebar');
        const close = document.querySelector('.closeFilter');
        const sidebar = document.querySelector('.product__item.filter');

        if (open == null) return;

        open.addEventListener('click', () => {
          sidebar.classList.add('active');
          close.classList.add('active');
        });
        close.addEventListener('click', () => {
          sidebar.classList.remove('active');
          close.classList.remove('active');
        });
      },
      changeLayout: function () {
        const btn = document.querySelectorAll('[data-grid]');
        const main = document.querySelector('.filterProduct');
        console.log(btn, 'btn');
        console.log(main, 'main');
        if (main == null) return;

        btn.forEach((item) =>
          item.addEventListener('click', (e) => {
            btn.forEach((i) => i.classList.remove('active'));
            e.target.classList.add('active');

            const grid = e.target.dataset.grid;

            main.className = 'filterProduct';
            main.className = main.className + ' ' + grid;
            main.style.animation = 'fadeInUp 1s ease-out forwards';

            main.addEventListener('animationend', () => {
              main.style.animation = '';
            });
          })
        );

        window.addEventListener('resize', (e) => {
          if (window.innerWidth < 991) {
            main.className = 'filterProduct gridRow';
          }
        });
      }
    };
    shopProduct.init();
  }, []);

  return { listProduct, loading, handleDeleteProduct, fetchProducts };
}

export default useProduct;
