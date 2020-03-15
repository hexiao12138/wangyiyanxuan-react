import React, { useEffect } from 'react'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import './index.less';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
export default function Swipers() {
	useEffect(() => {
		new Swiper('.swiper-container', {
			autoplay: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}, [])
	return (
		<div className="swiper-container">
			<div className="swiper-wrapper">
				<div className="swiper-slide"><img src={img1} alt=""/></div>
				<div className="swiper-slide"><img src={img2} alt=""/></div>
				<div className="swiper-slide"><img src={img3} alt=""/></div>
        <div className="swiper-slide"><img src={img4} alt=""/></div>
        <div className="swiper-slide"><img src={img5} alt=""/></div>
			</div>
			<div className="swiper-pagination"></div>
		</div>
	)
}
