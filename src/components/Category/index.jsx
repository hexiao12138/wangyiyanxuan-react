import React,{useState,useEffect,useCallback} from 'react';
import {SearchBar} from 'antd-mobile';
import {reqSlide} from '../../api';
import {Link} from 'react-router-dom';
import SlideRight from './slide-right';
import './index.less';
export default function Category ({location:{search}}) {
    const [categoryList,setCategoryList] = useState([])
    const [categoryId,setCategoryId] = useState(+search.slice(4) || 11)
    // 获取左侧导航栏数据
    const getLeftNav = useCallback(
      () => {
        reqSlide().then(res => {
          if (res.status === 200) {
            setCategoryList(res.data.data)  
          }
        })
      },
      [],
    )
    // 更改分类id
    const goDetail = useCallback(
      (id) => {
        setCategoryId(id)
      },
      [],
    )
    useEffect(() => {
      getLeftNav()
    }, [])
  return (
    <div className='search'>
      <div className="head">
        <SearchBar placeholder='搜索商品,共2300件好物' disabled/>
      </div>
      <div className="con">
        <div className="left">
          <ul>
            {
              categoryList.map((category,index) =>{
                return <Link onClick={() => goDetail(category.id)}  to={{pathname: '/category',search:`id=${category.id}`}} key={index}>
                  <li className={(categoryId || 11) === (category.id) ? 'on' :''}>{category.name}</li>
                </Link>
              })
            }
          </ul>
        </div>
        <div className="right">
            <SlideRight categoryId={categoryId}/>
        </div>
      </div>
    </div>
  )
}