import Mock from 'mockjs'
import data from './index.json'
import datas from './indexCateModule.json'
import slide from './cateNavDatas.json'
import slideRight from './cateLists.json'
Mock.mock('/category',{code:0,data: data.kingKongModule.kingKongList})
Mock.mock('/policyDescList',{code:0,data: data.policyDescList})
Mock.mock('/nav',{code:0,data: datas})
Mock.mock('/cateNav',{code:0,data: slide.categoryList})
Mock.mock('/slideright',{code:0,data: slideRight})
Mock.mock('/market',{code:0,data: data.categoryHotSellModule.categoryList})
Mock.mock('/disCount',{code:0,data: data.flashSaleModule.itemList})
