import axios from './axios';
export const reqCategory = () => axios(
  {
    methos: 'GET',
    url: '/category'
  }
 )
 // 请求保险数据
 export const reqPolicyDescList = () => axios(
   {
     methos: 'GET',
     url: '/policyDescList'
   }
  )
  // 请求导航栏数据
  export const reqNav = () => axios({
    method: 'GET',
    url: '/nav'
  })
  // 请求侧边栏导航数据
  export const reqSlide = () => axios({
    method: 'GET',
    url: '/cateNav'
  })
  // 请求侧边栏右边栏数据
  export const reqSlideRight = () => axios({
    method: 'GET',
    url: '/slideright'
  })
  // 值得买
  export const reqBuy = () => axios({
    method:'GET',
    url: '/topic/v1/know/navWap.json'
  })
 
  // 瀑布流数据
  export const reqList = () => axios({
    method: 'GET',
    url: '/topic/v1/find/recManual.json'
  })
  // 获取榜单数据
  export const reqMarket = () => axios({
    method: 'GET',
    url: '/market'
  })
  // 获取折扣数据
  export const reqDisCount = () => axios({
    method: 'GET',
    url: '/disCount'
  })
  // 页面初始化数据
  export const reqSearch = () => axios({
    method: 'POST',
    url: '/xhr/search/init.json'
  })
  // 搜索关键字
  export const reqKeyword = (keywordPrefix) => axios({
    method: 'POST',
    url: '/xhr/search/searchAutoComplete.json',
    data: {
      keywordPrefix
    }
  })