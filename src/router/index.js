import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bubble from '../views/BubbleSort'
import Insertion from '../views/InsertionSort'
import Radix from '../views/RadixSort'
import Selection from '../views/SelectionSort'
import Merge from '../views/MergeSort'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bubble',
        name: 'Bubble',
        component: Bubble
    },
    {
        path: '/insertion',
        name: 'Insertion',
        component: Insertion
    },
    {
        path: '/selection',
        name: 'Selection',
        component: Selection
    },
    {
        path: '/radix',
        name: 'Radix',
        component: Radix
    },
    {
        path: '/merge',
        name: 'Merge',
        component: Merge
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
