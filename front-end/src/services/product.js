import { URL_ROOT, axiosClient } from './index';

class ProductService {
  static getAllProduct({ keyword, page = 1, limit = 10, ...paramsSearch }) {
    const params = { page, keyword, limit, ...paramsSearch };
    let urlMerge = '';
    Object.keys(params).forEach((keyParam, index) => {
      if (params[keyParam]) {
        urlMerge += index === 0 ? `?${keyParam}=${params[keyParam]}` : `&${keyParam}=${params[keyParam]}`;
      }
    });
    let url = '/items' + urlMerge;
    if (!keyword) delete params.keyword;
    return fetch(URL_ROOT + url, { method: 'GET' }).then((res) => res.json());
  }

  static getVariantProductFilter() {
    let url = '/variants/product';
    return axiosClient.get(url);
  }

  static removeProduct(id) {
    let url = `items/delete/${id}`;
    return axiosClient.delete(url);
  }

  static addProduct(body) {
    let url = '/items/add';
    return axiosClient.post(url, {
      ...body
    });
  }

  static getDetailProduct({ id }) {
    let url = `/items/${id}`;
    return axiosClient.get(url);
  }

  static addProductToCart(body) {
    let url = `/cart/add`;
    return axiosClient.post(url, body);
  }
}

export default ProductService;
