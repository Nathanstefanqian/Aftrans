import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)


export const constantRoutes = [
  {
    path:'/',
    component: Layout,
    redirect: '/mytext/index',
    children:[{
      path: 'mytext/index',
      name: 'myText',
      component: () => import('@/views/MyText/index'),
      meta: {title: 'myText', icon:'myText'}
    }]
  },
  {
    path:'/mydocument',
    component: Layout,
    children:[{
      path: 'index',
      name: 'myDocument',
      component: () => import('@/views/MyDocument/index'),
      meta: {title: 'myDocument', icon:'myDocument'}
    }]
  },
  {
    path:'/myvoice',
    component: Layout,
    children:[{
      path: 'index',
      name: 'myVoice',
      component: () => import('@/views/MyVoice/index'),
      meta: {title: 'myVoice', icon:'myVoice'}
    }]
  },
  {
    path:'/mypicture',
    component: Layout,
    children:[{
      path: 'index',
      name: 'myPicture',
      component: () => import('@/views/MyPicture/index'),
      meta: {title: 'myPicture', icon:'myPitcture'}
    }]
  },
  {
    path:'/mypage',
    component: Layout,
    children:[{
      path: 'index',
      name: 'myPage',
      component: () => import('@/views/MyPage/index'),
      meta: {title: 'myPage', icon:'myPage'}
    }]
  }

]

const createRouter = () => new Router({
  scorllBehavior: ()=> ({ y:0 }),
  routes: constantRoutes
})

const router = createRouter()

//todo resetRouter()

export default router