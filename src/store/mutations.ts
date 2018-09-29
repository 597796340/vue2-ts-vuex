import { SET_USER_INFO } from "./mutation-types";
import { MutationTree } from "vuex";
import { setStore } from "../config/mUtils";

const mutations: MutationTree<any> = {
  // set user info
  [SET_USER_INFO](state, info) {
    state.adminInfo = info;
    state.isLogin = true;
    setStore("user_name", info.user_name);
  }
};

export default mutations;
