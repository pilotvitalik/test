import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routers.js'
import { store } from './store/store';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	routes: Routes,
	mode: 'history',
})

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('Невозможно открыть файл "index.htm".')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Сервер запущен на: http://localhost:%s', httpPort)
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
