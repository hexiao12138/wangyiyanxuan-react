import {GET_HOT} from './action-type';
import {reqSearch} from '../api';
const getHot = (key) => ({type: GET_HOT,data: key})
// 获取热词数据
export const getHotAsync = () => {
  return dispatch => {
    return reqSearch().then(res => {
      dispatch(getHot(res.data.data.hotKeywordVOList))
    })
  }
}