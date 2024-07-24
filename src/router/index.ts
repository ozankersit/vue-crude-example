import { createRouter, createWebHistory } from 'vue-router'
import ProfileMainView from '../views/profile/ProfileMainView.vue'
import ProfileDashboardView from '../views/profile/ProfileDashboardView.vue'
import ProfileSettingsView from '../views/profile/ProfileSettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/ProjectList.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/ProjectCreate.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/ProjectEdit.vue')
    },
    {
      path: '/show/:id',
      name: 'show',
      component: () => import('../views/ProjectShow.vue')
    },
    {
      path:'/profile/home',
      name:'profile-home',
      component: ProfileMainView
    },
    {
      path:'/profile/dashboard',
      name:'profile-dashboard',
      component: ProfileDashboardView
    },
    {
      path:'/profile/settings',
      name:'profile-settings',
      component: ProfileSettingsView
    }
  ]
})

export default router
