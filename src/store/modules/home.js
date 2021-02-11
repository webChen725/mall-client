import { getGoodsList } from "@/api/home";
import { getUserInfo, getUserCarts } from "@/api/common";

const state = {
  goodsList: [],
  count: 0,
  userInfo: null,
  cartList: []
};
const mutations = {
  getGoodsList(state, payload) {
    state.goodsList = payload.rows;
    state.count = payload.count;
  },
  getUserInfo(state, payload){
    state.userInfo = payload;
  },
  getUserCarts(state, payload){
    state.cartList = payload;
  }
};
const actions = {
  async getGoodsList({ commit }, query = "") {
    const res = await getGoodsList(query);
    commit("getGoodsList", res);
  },
  async getUserInfo({ commit }){
    const res = await getUserInfo();
    commit("getUserInfo", res.data);
  },
  async getUserCarts({ commit }){
    const res = await getUserCarts();
    commit("getUserCarts", res.carts);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
