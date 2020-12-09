// 用来存储所有的路由信息，定义需要登陆拦截的页面(auth)
import Login from "../views/login/login";
import Page1 from "../views/page1/page1";

export default [
    {path: '/', name: 'login', component: Login},
    {path: '/page1', name: 'page1', component: Page1},
]