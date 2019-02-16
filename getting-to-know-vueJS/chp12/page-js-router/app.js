//Defining the components
const Main = {
    template: `<div>
        <h2>Welcome to main page</h2>
    </div>`
};
const ContactMe = {
    template: `<div>
        <h3>My name is Tochukwu</h3>
    </div>
    `
};
const FourOFour = {
    template: `<div>
        </h3>404 Page not found</h3>
    </div>
    `
};

//Instantiating the Vue app
var app = new Vue({
    el: '#app',
    data: {
        currentView: {
            template: '<p>Please Wait...</p>'
        }
    },
    template: `
        <div>
            <ul>
               <li><a href="/">Main</a></li>
               <li><a href="/contact-me">Contact Me</a></li>
            </ul>
            <div v-bind:is="currentView"></div>
        </div>
    `
});

//Setting up the routes using page.js
page('/', function(){
    app.currentView = Main;
});
page('/contact-me', function(){
    app.currentView = ContactMe
});
page('*', function(){
    app.currentView = FourOFour;
});
page();
