import axios from 'axios';
axios.interceptors.request.use(
  // 将要发送请求是成功的（内部没有出错）触发回调函数
  (config) => {
    // console.log(config); // 请求配置信息
    // 功能：修改请求信息
    // 如果post请求content-type: applicaion/json。 以下代码就不需要了
    if (config.method === 'post') {
      config.headers['content-type'] = 'application/x-www-form-urlencoded';
      /* 
        修改data数据 成 urlencoded
          { key1: value1, key2: value2 } ---> 'key1=value1&key2=value2'
      */
      config.data = Object.keys(config.data).reduce((prev, key) => {
        let value = config.data[key];
        // 检测数据类型
        const type = Object.prototype.toString.call(value).slice(8, -1);
        if (type === 'Object' || type === 'Array') {
          // 如果是对象/数组  要转换成JSON数据
          value = JSON.stringify(value);
        }
        return prev + `&${key}=${value}`;
      }, '').substring(1);
    }

    return config;
  }
)
export default axios