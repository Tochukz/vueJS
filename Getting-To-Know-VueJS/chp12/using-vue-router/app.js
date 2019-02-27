/**Defining components for each routes */
const fourOhFour = {
    computed: {
        url: function() {
            return this.$router.currentRoute.path;
        }
    },
    template: `
          <div>
              <p>Sorry, URL not found : {{url}} </p>
              <p> ̄\\_(ツ)_/ ̄ </p>
          </div>
       `
};
const Main = {
    template: `
        <p>Welcome to <strong>Getting to know Vue.js</strong></p>
    `
};
const ContactUs = {
    template: `
        <p>Contact Us @ <strong>Getting to know Vue.js</strong></p>
    `
};
//We can use the $route property to access the params wihtout prepending 'this' to it in the template.
//However, to access params in thhe javascript for the component we can do so by using this.$route
//The $route object is a reference to the current active route
const Tool = {
    template: `
        <p>Tool: <strong>{{ $route.params.toolName }}</strong></p>
    `
}

const Profile = {
    template: `<div>
        <p><strong>Name: </strong>{{$route.params.user.name}}</strong></p>
        <p><strong>Email: </strong>{{$route.params.user.email}}</strong></p>
    </div>`
}
const Customer = {
    template: `<div> 
        <p><strong>Name: </strong>{{person.name}}</p>
        <p><strong>City: </strong>{{person.city}}</p>
    </div>`,
    props: {
        person: Object
    }
}

/**Defing the routes */
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs
    },
    {
        path: '/tools/:toolName',
        name: 'tools',
        component: Tool
    },
    {
        path: '/profile/:user',
        name: 'profile',
        component: Profile
    },
    {
        path: '/customer/',
        name: 'customer',
        component: Customer,
        props: true 
    },
    {
        path: '/*',
        name: 'notFound',
        component: fourOhFour
    },
    
]; 
//When a route object has a 'props' key with a vallue of true, the Object parameter passed through the URL will not be displayed in the URL. See the 'customer' route

/**Using the routes object on vue-router */
let router = new VueRouter({ routes });

/**Defining the app and using the vue-router object */
var app = new Vue({
    router,
    el: '#app',
    template: `
        <div id="app">
            <div id="nav">
               <router-link to="/">Home </router-link> |
               <router-link to="/contact-us">Contact Us</router-link> |
               <router-link to="/tools/web-pack">Web Pack</router-link> |
               <!--Using an object as a parameter -->
               <router-link v-bind:to="{
                   name: 'profile',
                   params: { 
                       user: {
                           name: 'Getting to Know Vue.js',
                           email: 'knowvuejs@apress.com'
                       }
                   }
                 }"> Profile </router-link> |
               <router-link v-bind:to="{
                   name: 'customer',
                   params: {
                      person: {
                          name: 'Chichi',
                          city: 'Lagos'
                      }
                   }
               }"> Customer </router-link>
            </div>
            <router-view />
        </div>
    `
})

/**
 * When using a module system you do:
 * 
 * import Vue from 'vue';
 * import Router from 'vue-router';
 * 
 * Vue.use(Router);
 */