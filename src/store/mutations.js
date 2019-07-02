// 直接更新state的一些方法对象
import Vue from 'vue'
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
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    }, [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    }, [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    }, [RECEIVE_User_Info](state, { userInfo }) {
        state.userInfo = userInfo
    }, [RESET_USER_INFO](state) {
        state.userInfo = {}
    }, [RECEIVE_INFO](state, { info }) {
        state.info = info
    }, [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    }, [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    }, [INCREMENT_FOOD_COUNT](state, { food }) {
        //第一次点
        if (!food.count) {
            //food.count = 1 新增属性没有数据绑定
            Vue.set(food, 'count', 1)

            state.cartFoods.push(food)
        } else {
            food.count++
        }
    }, [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) {
            food.count--
                if (food.count === 0) {
                    state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
                }
        }
    }, [CLEAR_CART](state) {
        //把food中count清空
        state.cartFoods.forEach((food) => {
                food.count = 0
            })
            //清空cartFoods
        state.cartFoods = []
    }

}
