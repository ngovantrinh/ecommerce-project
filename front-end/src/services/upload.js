import { axiosClientFile } from './axiosFile';

class UpfileService {
  // Jobs
  static upfile(upload) {
    const url = `/upload`;
    return axiosClientFile.post(url, upload);
  }
}
export default UpfileService;
