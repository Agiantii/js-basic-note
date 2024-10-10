# 具体视频参考[there](https://www.bilibili.com/video/BV1nV4y1s7ZN/?p=14&spm_id_from=333.337.top_right_bar_window_history.content.click&vd_source=62585031a7aa301558f3569ed39864e7)
## 安装 mockjs

```bash
npm install mockjs -S
```
## 创建mockjs
> 在src 下创建 mock 文件夹，并在文件夹下创建 index.js 文件
>scr/mock/indx.js

```js
import Mock from 'mockjs'

// 这里 参数 为 接口地址  请求方法  返回数据

let data = Mock.mock('api/data', 'get','success')

export default data
```
同时这里 直接写 api/data 参考[跨域vue.config.js](cors-and-axios-config.md)

## 使用mockjs
> 对于 vue,可以全局注册mockjs
> 
> src/mai.js
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './mock'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// Vue.use(axios);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
```
## 具体使用
就跟真正发送请求，mockjs 主要做的就是拦截功能,模拟数据返回。