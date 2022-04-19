import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
     * Login, register and fprgot password routes:
     */
    {
        path: '/',
        name: 'login',
        component: () => import('../views/LoginView.vue')

    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue')

    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/ForgotPass.vue')
    },
    /**
     * Error pages:
     */
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/errors/404.vue')
    },
    // TODO: 500, 403, 401

    /**
     * Dashboard routes:
     */
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/DashMain.vue')
    },
    {
        path: '/dashboard/fields',
        name: 'fields',
        component: () => import('../views/dashboard/DashFields.vue')
    },
    {
        path: '/dashboard/field',
        name: 'field',
        component: () => import('../views/dashboard/DashField.vue')
    },
    {
        path: '/dashboard/tasks',
        name: 'tasks',
        component: () => import('../views/dashboard/DashTasks.vue')
    },
    {
        path: '/dashboard/task/?id=',
        name: 'task',
        component: () => import('../views/dashboard/DashTask.vue')
    },
    {
        path: '/dashboard/block/?id=:id',
        name: 'block',
        component: () => import('../views/dashboard/DashBlock.vue')
    },
  ]
})

export default router
