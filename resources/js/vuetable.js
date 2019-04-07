
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


import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(ClientTable,{
  perPage: 10
})



new Vue({
  data: {
    columns: ['option', 'type', 'description', 'default'],
    data: [
    {
    option:'columnsClasses',
    type:'Object',
    description:'Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes',
    default:'<code>{}</code>'
    },
    {
        option:'multiSorting (client-side)',
      type:'Object',
      description:'See docomentation',
      default:'<code>{}</code>'
    },
    {
        option:'serverMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the server component',
      default:'<code>false</code>'
    },
     {
        option:'clientMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the client component',
      default:'<code>true</code>'
    },{
    option:'columnsClasses',
    type:'Object',
    description:'Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes',
    default:'<code>{}</code>'
    },
    {
        option:'multiSorting (client-side)',
      type:'Object',
      description:'See docomentation',
      default:'<code>{}</code>'
    },
    {
        option:'serverMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the server component',
      default:'<code>false</code>'
    },
     {
        option:'clientMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the client component',
      default:'<code>true</code>'
    },{
    option:'columnsClasses',
    type:'Object',
    description:'Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes',
    default:'<code>{}</code>'
    },
    {
        option:'multiSorting (client-side)',
      type:'Object',
      description:'See docomentation',
      default:'<code>{}</code>'
    },
    {
        option:'serverMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the server component',
      default:'<code>false</code>'
    },
     {
        option:'clientMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the client component',
      default:'<code>true</code>'
    },{
    option:'columnsClasses',
    type:'Object',
    description:'Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes',
    default:'<code>{}</code>'
    },
    {
        option:'multiSorting (client-side)',
      type:'Object',
      description:'See docomentation',
      default:'<code>{}</code>'
    },
    {
        option:'serverMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the server component',
      default:'<code>false</code>'
    },
     {
        option:'clientMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the client component',
      default:'<code>true</code>'
    },
    ],
    options: {
      sortable: ['option']
    }
  }

})
