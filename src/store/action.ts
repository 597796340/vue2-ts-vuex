import { SET_USER_INFO } from "./mutation-types";
import { Action, ActionTree } from "vuex";
import { getAdminInfo } from '../service/getData';

const setUserInfo: Action<any, any> = ({ commit }, info) => {
  commit(SET_USER_INFO, info);
};

 const getAdminData: Action<any, any> = async ({commit}) => {
  try{
    const res = await getAdminInfo()
    if(res.status == 1) commit(SET_USER_INFO,res.data)
    else throw new Error(res);
  }catch(err){
    console.log('Did not login or valid session');
  }
}

const actions: ActionTree<any, any> = {
  setUserInfo,
  getAdminData
}

export default actions;
