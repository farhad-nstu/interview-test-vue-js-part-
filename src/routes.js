import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'
import ProductList from './components/ProductList.vue'
import ProposalList from './components/ProposalList.vue'
import Create from './components/product/Create.vue'
import CustomerCreate from './components/customer/CustomerCreate.vue'
import CategoryCreate from './components/category/CategoryCreate.vue'
import CategoryList from './components/CategoryList.vue'
import ProposalCreate from './components/proposal/ProposalCreate.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
       	path: "/login",
        component: Login,
        meta: {
          forVisitors: true
        }
      },

      {
       	path: "/register",
        component: Register,
        meta: {
          forVisitors: true
        }
      },

      {
        path: "/feed",
        component: Feed,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/products",
        component: ProductList,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/products/create",
        component: Create,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/customers/create",
        component: CustomerCreate,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/categories/create",
        component: CategoryCreate,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/category",
        component: CategoryList,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/proposals/create",
        component: ProposalCreate,
        meta: {
          forAuth: true
        }
      },

      {
        path: "/proposal",
        component: ProposalList,
        meta: {
          forAuth: true
        }
      },

        
    ],

    linkActiveClass: 'active',
     mode: 'history'
      
})

export default router