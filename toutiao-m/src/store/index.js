import Vue from "vue";
import Vuex from "vuex";
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex);

// 这样做的目的可以避免访问和获取数据的名字不一致导致的问题
const USER_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
    state: {
        // user: null,
        user: getItem(USER_KEY)
    },
    mutations: {
        setUser(state, data) {
            state.user = data
            //为了防止页面刷新数据丢失，我们需要把数据放入本地存储中，
            //仅仅是为了持久化数据
            //  window.localStorage.setItem('user', JSON.stringify(state.user))
            setItem(USER_KEY, state.user)

        }
    },
    actions: {},
    modules: {},
});
