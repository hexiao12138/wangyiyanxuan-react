import {lazy} from 'react'
export default [
	{
    path: '/',
    component: lazy(() => import('../components/Msite')),
    exact: true
  },
  {
    path: '/category',
    component: lazy(() => import('../components/Category')),
    exact: true
  },
  {
    path: '/buy',
    component: lazy(() => import('../components/Buy')),
    exact: true
  },
  
  {
    path: '/cart',
    component: lazy(() => import('../components/Cart')),
    exact: true
  },
  {
    path: '/user',
    component: lazy(() => import('../components/User')),
    exact: true
  },
  {
    path: '/search',
    component: lazy(() => import('../components/search')),
    exact: true
  }
]
