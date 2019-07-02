import ajax from './ajax'

// 获取地址信息(根据经纬度串)
export const reqAddress = (geohash) => ajax(`/api/position/${geohash}`)

// 获取msite页面食品分类列表
export const reqFoodcategorys = () => ajax('/api/index_category')

// 获取msite商铺列表(根据经纬度)
export const reqShops = (latitude, longitude) => ajax('/api/shops', { latitude, longitude })
    /**
     * 根据关键字获取商家列表
     */
export const reqSearchGoods = (geohash, keyword) => ajax('/api/search_shops', { geohash, keyword })
    /**
     * 账号密码登录
     */
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax('/api/login_pwd', {
    name,
    pwd,
    captcha
}, 'POST')

/**
 * 发送短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', { phone })

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', { phone, code }, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo = () => ajax('/api/userinfo')

/**
 * 请求登出
 */
export const reqLogout = () => ajax('/api/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
