import React, { useEffect, useState, useMemo } from 'react'
import './index.less'
import { reqSlideRight } from '../../../api'
export default function Slide({ categoryId }) {
	const [slideRightList, setSlideRightList] = useState([])
	useEffect(() => {
		reqSlideRight().then(res => {
			if (res.status === 200) {
				setSlideRightList(res.data.data)
			}
		})
	}, [])
	// 查找对应的分类对象
	const item = useMemo(
		() => slideRightList.find(item => categoryId === item.id),
		[categoryId,slideRightList]
  )
	return (
		<div className="slide-right">
			<img src={item && item.categoryList[0].bigImage} alt="" />
			<ul>
				{item &&
					item.categoryList.map((i, index) => {
						return (
							<li key={index}>
								<img src={i.wapBannerUrl} alt="" />
								<span>{i.name}</span>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
