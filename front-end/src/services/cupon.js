import { axiosClient } from '.';

class CuponService {
  static checkCupon(cupon) {
    let url = '/cupons/check';
    return axiosClient.post(url, { cuponCode: cupon });
  }

//   static createCart() {
//     let url = '/cart/createCart';
//     return axiosClient.post(url);
//   }

//   static editItemProductCart(body) {
//     let url = `/cart/edit`;
//     return axiosClient.put(url, { ...body });
//   }


}

export default CuponService;
