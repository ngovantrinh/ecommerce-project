import { axiosClient } from '.';

class UserService {
  static getAllUser() {
    let url = '/getAllUser';
    return axiosClient.get(url);
  }

  static updateActive({ userId }) {
    let url = '/disableUsers';
    return axiosClient.put(url, {
      userId
    });
  }
}

export default UserService;
