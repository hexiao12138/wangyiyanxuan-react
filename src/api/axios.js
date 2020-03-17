import axios from 'axios';
axios.interceptors.request.use(
  // 将要发送请求是成功的（内部没有出错）触发回调函数
  (config) => {
    // console.log(config); // 请求配置信息
    // 功能：修改请求信息
    // 如果post请求content-type: applicaion/json。 以下代码就不需要了
   

    return config;
  }
)
export default axios