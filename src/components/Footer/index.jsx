import React from 'react'
import { Link,withRouter } from 'react-router-dom'
import foots from '../../config/foot'
import './index.less'
 function Footer({location:{pathname}}) {

	return (
		<ul className='foot-ul'>
			{foots.map((foot, index) => {
				return (
					<Link key={index} to={foot.to}>
						<li className={pathname === foot.to ? 'on': ''}>
							<i className={foot.className}></i>
							<span>{foot.name}</span>
						</li>
					</Link>
				)
			})}
		</ul>
	)
}
export default withRouter(Footer)
