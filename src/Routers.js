import Page from './components/Wrapper/Page/Page.vue'
import MainPage from './components/Wrapper/Page/MainPage/MainPage.vue'
import ServicePage from './components/Wrapper/Page/ServicePage/ServicePage.vue'

export default [
{  path: '/', component: MainPage,},
{  path: '/service/:id', component: ServicePage, props: true,},
]