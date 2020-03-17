import React, { useState, useEffect, useCallback } from 'react'
import './index.less'
import {
	reqNav,
	reqPolicyDescList,
	reqCategory,
	reqMarket,
	reqDisCount
} from '../../api'
import Swiper from '../swiper'
import page1 from '../swiper/images/6.png'
import page2 from '../swiper/images/7.png'
import page3 from '../swiper/images/8.png'
import new1 from './images/1.png'
import new2 from './images/2.png'
import Splite from '../Splite'
export default function Msite({history}) {
	const [navList, setNavList] = useState([])
	const [insuranceList, setInsuranceList] = useState([])
	const [categoryList, setCategorylist] = useState([])
	const [marketList, setMarketList] = useState([])
	const [discountList, setDiscountList] = useState([])
	useEffect(() => {
		getNvaList()
		getInsuranceList()
		getCategoryList()
		getMarketList()
		getDiscountList()
	},[])
	// 获取导航栏列表
	const getNvaList = useCallback(() => {
		reqNav().then(res => {
			if (res.status === 200) {
				setNavList(res.data.data)
			}
		})
	}, [])
	// 获取保险列表
	const getInsuranceList = useCallback(() => {
		reqPolicyDescList().then(res => {
			if (res.status === 200) {
				setInsuranceList(res.data.data)
			}
		})
	}, [])
	// 获取分类列表
	const getCategoryList = useCallback(() => {
		reqCategory().then(res => {
			if (res.status === 200) {
				setCategorylist(res.data.data)
			}
		})
	}, [])
	// 获取榜单列表
	const getMarketList = useCallback(() => {
		reqMarket().then(res => {
			if (res.status === 200) {
				setMarketList(res.data.data)
			}
		})
	}, [])
	// 获取优惠列表
	const getDiscountList = useCallback(() => {
		reqDisCount().then(res => {
			if (res.status === 200) {
				setDiscountList(res.data.data)
			}
		})
	}, [])
	const goSearch = useCallback(
		() => {
			history.push('/search') 
		},
		[]
	)
	return (
		<div className="wrapper">
			<header>
				<div className="search">
					<span>网易严选</span>
					<i className='iconfont iconsousuo'></i>
					<input
						type="text"
						placeholder="搜索商品,共3000件好物"
						onClick={goSearch}
					/>
				</div>
				<div className="nav">
					<nav>
						<div className="nav-ul">
							{navList.map((nav, index) => {
								return <span key={index}>{nav.name}</span>
							})}
						</div>
					</nav>
				</div>
			</header>
			<div className="swiper">
				<Swiper />
			</div>
			<div className="insurance">
				<ul className="insuranceList">
					{insuranceList.map((insurance, index) => {
						return (
							<li key={index}>
								<img src={insurance.icon} alt="" />
								<span>{insurance.desc}</span>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="msite-category">
				<ul>
					{categoryList.map((category, index) => {
						return (
							<li key={index}>
								<img src={category.picUrl} alt="" />
								<span>{category.text}</span>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="advertising">
				<div className="con">
					<img src={page1} alt="" />
					<img src={page2} alt="" />
					<img src={page3} alt="" />
				</div>
			</div>
			<div className="newPerson">
				<div className="head">
					<span>新人专享礼</span>
				</div>
				<div className="con">
					<div className="left">
						<span>新人专享礼包</span>
						<img src={new1} alt="" />
					</div>
					<div className="right">
						<div className="top">
							<div className="top-left">
								<p className="welfare">福利社</p>
								<p className="today">今日特价</p>
							</div>
							<img src={new2} alt="" />
						</div>
						<div className="bottom">
							<p>新人拼团</p>
							<span className="one">1元起包邮</span>
						</div>
					</div>
				</div>
			</div>
			<Splite />
			<div className="hot-list">
				<div className="con">
					<div className="head">
						<span>类目热销榜</span>
					</div>
					<div className="main">
						<ul>
							{marketList.map((market, index) => {
								return (
									<li key={index}>
										<span>{market.categoryName}</span>
										<img src={market.picUrl} alt="" />
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
			<Splite />
			<div className="disCount">
				<div className="con">
					<div className="head">
						<div className="left">
							<span className="time">限时购</span>
							<span>00</span> : <span> 00</span> : <span>00</span>
						</div>
						<div className="right">
							<span>更多 ></span>
						</div>
					</div>
					<div className="main">
						<ul>
							{discountList.map((discount, index) => {
								return (
									<li key={index}>
										<img src={discount.picUrl} alt="" />
										<div className="price">
											<span className='new'>￥{discount.activityPrice}</span>
											<span className='old'>￥{discount.originPrice}</span>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
			<Splite />
		</div>
	)
}
