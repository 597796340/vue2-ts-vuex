import Vue from 'vue'
import Router from 'vue-router'
import {OPTION_MSG, SELECT_MSG, INQUIRE_MSG, INFORMATION_MSG} from '../content'


// ts 按需加载需要@types/webpack-env 这个包
const login = (r: any) => require.ensure([], () => r(require('../page/login/login')), undefined, 'login');
const manage = (r: any) => require.ensure([], () => r(require('../page/manage/manage')), undefined, 'manage');
const home = (r: any) => require.ensure([], () => r(require('../page/home/home')), undefined, 'home');
const select = (r: any) => require.ensure([], () => r(require('../page/select/select')), undefined, 'select');
const inquire = (r: any) => require.ensure([], () => r(require('../page/inquire/inquire')), undefined, 'inquire');
const information = (r: any) => require.ensure([], () => r(require('../page/information/information')), undefined, 'information');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
    },
    {
      path: '/manage',
      component: manage,
      children: [
        {
          path: '',
          component: home,
          meta: [],
        }, {
          path: '/select',
          component: select,
          meta: [OPTION_MSG, SELECT_MSG],
        },{
          path: '/inquire',
          component: inquire,
          meta: [OPTION_MSG, INQUIRE_MSG]
        }, {
          path: '/information',
          component: information,
          meta: [OPTION_MSG, INFORMATION_MSG]
        },
      ]
    },
  ],
})
