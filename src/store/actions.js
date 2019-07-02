// 间接更新mutation的方法对象

import {
    reqAddress,
    reqFoodcategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo,
} from '../api'

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_User_Info,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'

export default {
    // 异步获取地址
    async getAddress({ commit, state }) {
            let geohash = state.latitude + ',' + state.longitude
            const result = await reqAddress(geohash)
            if (result.code === 0) {
                const address = result.data
                commit(RECEIVE_ADDRESS, { address })
            }
        },
        // 异步食品列表
        async getCategorys({ commit }) {
            const result = await reqFoodcategorys()
            if (result.code === 0) {
                const categorys = result.data
                commit(RECEIVE_CATEGORYS, { categorys })
            }
        }, // 异步商家列表
        async getShops({ commit, state }) {
            const result = await reqShops(state.latitude, state.longtitude)
            if (result.code === 0) {
                const shops = result.data
                commit(RECEIVE_SHOPS, { shops })
            }
        },
        // 同步记录用户信息
        recordUser({ commit }, userInfo) {
            commit(RECEIVE_User_Info, { userInfo })
        },
        // 异步获取用户信息
        async getUser({ commit, state }) {
            const result = await reqUserInfo()
            if (result.code === 0) {
                const userInfo = result.data
                commit(RECEIVE_User_Info, { userInfo })
            }
        },
        async logout({ commit }) {
            const result = await reqLogout()
            if (result.code === 0) {
                commit(RESET_USER_INFO)
            }
        },
        // 异步获取商家信息
        async getShopInfo({ commit }) {
            const result = await reqShopInfo()
            if (result.code === 0) {
                const info = result.data
                info.score = 3.5
                commit(RECEIVE_INFO, { info })

            }
        },

        // 异步获取商家评价列表
        async getShopRatings({ commit }, callback) {
            const result = await reqShopRatings()
            if (result.code === 0) {
                const ratings = result.data
                commit(RECEIVE_RATINGS, { ratings })

                callback && callback()
            }
        },

        // 异步获取商家商品列表
        async getShopGoods({ commit }, callback) {
            const result = await reqShopGoods()
            if (result.code === 0) {
                const goods = result.data
                commit(RECEIVE_GOODS, { goods })
                    // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件

                callback && callback()
            }
        },
        //同步更新Goods中food的count数量
        updataFoodCount({ commit }, { isAdd, food }) {
            if (isAdd) {
                commit(INCREMENT_FOOD_COUNT, { food })
            } else {
                commit(DECREMENT_FOOD_COUNT, { food })
            }
        },
        //同步清空购物车中信息
        clearCart({ commit }) {
            commit(CLEAR_CART)
        }

}
