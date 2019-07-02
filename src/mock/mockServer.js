import Mock from 'mockjs'
import data from './data.json'

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/goods', {
    code: 0,
    data: data.goods
})
Mock.mock('/ratings', {
    code: 0,
    data: data.ratings
})
Mock.mock('/info', {
    code: 0,
    data: data.info
})

// export default xxx  不需要
