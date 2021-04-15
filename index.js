/*
 * @Author: Duan shuai
 * @Date: 2021-04-07 15:59:14
 * @LastEditors: Duan shuai
 * @LastEditTime: 2021-04-09 16:54:30
 */
import uiUnfold from "./src/components/ui-unfold.vue";

// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("ui-unfold", uiUnfold);
}
//这样就可以使用Vue.use进行全局安装了。
uiUnfold.install = function(Vue) {
  Vue.component(uiUnfold.name, uiUnfold);
};
export default uiUnfold;
