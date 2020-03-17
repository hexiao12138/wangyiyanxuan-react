import React,{useCallback,useEffect} from 'react';
import {SearchBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {reqKeyword} from '../../api';
import {debounce} from '../../utils/debounce';
import './index.less';
import {getHotAsync} from '../../redux/action';
 function Search ({history,getHotAsync,hotKey}) {

  const goBack = useCallback(
    () => {
    history.goBack()
    },
    [history]
  )
  // 根据关键字获取数据
  const search = useCallback(
    (word) => { 
      console.log(111)
      reqKeyword( decodeURI(word)).then(res => {
      })
    },
    []
  )
  useEffect(() => {
    getHotAsync()
  }, [])
  return (
    <div className='search'>
     <header>
     <SearchBar
      placeholder='请输入商品名称'
      showCancelButton
      onCancel={goBack}
      onChange={debounce(search,200)}
      />
     
     </header>
     <section>
        <p>热门搜索</p>
        <ul>
          {
            hotKey.map((hot,index) => {
            return <li className={hot.type === 0? 'on' : ''} key={index}>{hot.keyword}</li>
            })
          }
        </ul>
     </section>
    </div>
  )
}
export default connect(state => ({hotKey:state.hotKey}),{getHotAsync})(Search)