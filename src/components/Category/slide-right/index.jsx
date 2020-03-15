import React,{useEffect} from 'react';
import './index.less';
export default function Slide ({item}) {
  useEffect(() => {
    
  }, [])
  return (
      <div className="slide-right">
        <img src={item && item[0].bigImage} alt=""/>
        <ul>
          {
            item && item.map((i,index) => {
              return <li key={index}>
                <img src={i.wapBannerUrl} alt=""/>
                <span>{i.name}</span>
              </li>
            })
          }
          
        </ul>
      </div>
  )
}