
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('my-component', require('./components/MyComponent.vue').default);  
// Vue.component('component-index', require('./components/ComponentIndex.vue').default);  
// Vue.component('api-calling', require('./components/ApiCalling.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import Vue from 'vue'
import Router from 'vue-router'
import App from './components/ApiCalling'
import ListProduct from './components/ListProduct'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(Router)

Vue.use(ServerTable, {
    compileTemplates: true,
    highlightMatches: true,
    pagination: {
    dropdown:true,
        chunk:5
    },
    filterByColumn: true,
    texts: {
        filter: "Search:"
    },
    datepickerOptions: {
        showDropdowns: true
    }
});

export const router = new Router({
	mode: 'history',
    routes: [
        {
            path: '/admin/products/index',
            name: 'index',
            component: ListProduct
        },
        {
            path: '/admin/products/create',
            name: 'create',
            component: AddProduct,
        },
        {
            path: '/admin/products/edit/:id',
            name: 'edit',
            component: EditProduct,
        },
    ],
})




const app = new Vue({
    el: '#app',
    components: { App },
    router,
    data: {
        columns: ['id','name','price','count','created_at','updated_at'],
        // tableData: [
        //     {id:1, name:"John",age:"20"},
        //     {id:2, name:"Jane",age:"24"},
        //     {id:3, name:"Susan",age:"16"},
        //     {id:4, name:"Chris",age:"55"},
        //     {id:5, name:"Dan",age:"40"},
        //     {id:1, name:"John",age:"20"},
        //     {id:2, name:"Jane",age:"24"},
        //     {id:3, name:"Susan",age:"16"},
        //     {id:4, name:"Chris",age:"55"},
        //     {id:5, name:"Dan",age:"40"},
        //     {id:1, name:"John",age:"20"},
        //     {id:2, name:"Jane",age:"24"},
        //     {id:3, name:"Susan",age:"16"},
        //     {id:4, name:"Chris",age:"55"},
        //     {id:5, name:"Dan",age:"40"},
        //     {id:1, name:"John",age:"20"},
        //     {id:2, name:"Jane",age:"24"},
        //     {id:3, name:"Susan",age:"16"},
        //     {id:4, name:"Chris",age:"55"},
        //     {id:5, name:"Dan",age:"40"},
        // ],
        options: {
	       responseAdapter(resp) { 
	       	var data = this.getResponseData(resp); 
	       	return { data: data.data, count: data.count } 
	       }
        }
    }
});

