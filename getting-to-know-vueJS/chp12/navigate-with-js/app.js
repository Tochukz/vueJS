const Home = {
    template: `<div><h2>Welcome to my Code Palace</h2></div>`
};
const AboutMe = {
    template: `<div><p><strong>About me</strong>: I am an awesone multistack developer</p></div>`
};
const ContactMe = {
    template: `<div>
                    <p><strong>Contat Me</strong> 
                        My Website
                        <a href="http://tochukwu.xyz">Tochukwu</a>
                    </P>
                </div>`,
};
const Details = {
    template: `<div>
                  <p><strong>Lang:</strong>{{$route.params.stack.lang}}</p>
                  <p><strong>Framework:</strong>{{$route.params.stack.framework}}</p>
              </div>`
    
};
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about-me',
        name: 'aboutme',
        alias: "/about",
        component: AboutMe
    },
    {
        path: "/contact-me",
        name: "contactme",
        component: ContactMe
    },
    {
        path: "/details",
        name: "details",
        component: Details
    },
    {
        path: "/will-redirect",
        redirect: "/contact-me"
    },
];

const router = new VueRouter({routes: routes});

var app = new Vue({
    router: router,
    el: '#app',
    methods: {
         goToHome: function(){
            this.$router.push('/')  
         },
         goToAboutme: function(){
             //this.$router.push('about-me');
             this.$router.push({path: 'about-me'})
         },
         goToContactme: function(){
             //this.$router.push('contact-me');
             this.$router.push({name: 'contactme'});
         },
         goToDetails: function(){
             this.$router.push({
                 name: 'details',
                 params: {
                     stack: {
                         lang: 'JavaScript',
                         framework: 'Vue'
                     }
                 }
             });
         }
    },
    template: `
        <div>
            <div>
                <button v-on:click="goToHome()">Home</button> |
                <button v-on:click="goToAboutme()">About Me</button> |
                <button v-on:click="goToContactme()">Contact Me</button> |
                <button v-on:click="goToDetails()">Details</button> |
                <router-link to="/will-redirect" >Will Redirect</router-link> |
                <router-link to="/about">About Alias</router-link>
            </div>
            <router-view />
        </div>
    `
});