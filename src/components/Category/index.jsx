import React,{useState,useEffect,useCallback} from 'react';
import {SearchBar} from 'antd-mobile';
import {reqSlide,reqSlideRight} from '../../api';
import {Link} from 'react-router-dom';
import SlideRight from './slide-right';
import './index.less';
export default function Category ({history:{location:{search}}}) {
    const [categoryList,setCategoryList] = useState([])
    const [slideRightItem,setSlideRightItem] = useState([])
    const [categoryId,setCategoryId] = useState(11)
    useEffect(() => {
      getLeftNav()
      getCategory()
    }, [categoryId])
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
    // 获取右侧分类数据
    const getCategory = useCallback(
      () => {
       reqSlideRight().then(res => {
         if (res.status === 200) {
            setCategoryId(+search.substr(4)) 
           res.data.data.find(item => {
             if (item.id === categoryId) {
                setSlideRightItem(item)
               return true
             }
           })
         }
       })
      },
      [search,categoryId]
    )
    // 跳转分类数据
    const goDetail = useCallback(
      (id) => {
        setCategoryId(id)
      },
      [],
    )
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
                  <li>{category.name}</li>
                </Link>
              })
            }
          </ul>
        </div>
        <div className="right">
            <SlideRight item={slideRightItem.categoryList}/>
        </div>
      </div>
    </div>
  )
}