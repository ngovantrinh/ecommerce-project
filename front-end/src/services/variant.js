import { axiosClient } from '.';

class VariantService {
  static getVariants() {
    let url = '/variants/product';
    return axiosClient.get(url);
  }
}

export default VariantService;
