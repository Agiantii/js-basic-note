

### AXIOS全局使用方法
#### src\main.js中导入

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI);
// Vue.use(axios);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
```
#### 具体在组件中使用
> src\views\TableView.vue
```javascript
// 全局使用 写法
      this.$axios.get('api/insertBook',{
        params:{
          id:this.addmessage.id,
          name:this.addmessage.name,
          author:this.addmessage.author
        }
      })
```
### CORS 前端 方法 配置

#### step
##### 在package.json 同级目录 下创建 vue.config.js
文件

```javascript
//config
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 9080,// 项目启动的端口
        proxy: {
            '/api': {    //1
                target: 'http://localhost:9090',//2 后端 url
                changOrigin: true,
                pathRewrite: {    //3
                    '^/api': ''
                }
            }
        }
    }
}
```