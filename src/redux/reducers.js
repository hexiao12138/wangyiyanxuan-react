import {combineReducers} from 'redux';
import {GET_HOT} from './action-type';
function hotKey (pre=[],action) {
  switch (action.type) {
    case GET_HOT:
      return action.data
    default:
      return pre
  }
} 
export default combineReducers({
  hotKey
})