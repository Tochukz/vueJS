# Pro VueJS
Find code sample at https://github.com/Apress/pro-vue-js-2  

## PART I: Getting Started with Vue.js

### Chapter 5: Sport Store: A real Application
__Create a Vue application__  
`$ vue create my-app --default`  

__Add dependencies__  
```
cd sportsstore
npm install axios@0.18.0
npm install vue-router@3.0.1
npm install vuex@3.0.1
npm install vuelidate@0.7.4
npm install bootstrap@4.0.0
npm install font-awesome@4.7.0
npm install --save-dev json-server@0.12.1
npm install --save-dev jsonwebtoken@8.1.1
npm install --save-dev faker@4.1.0
```
Subjects Covered:  
* Data source (json-server for development)  
* Store (Vuex)  
* Axios for http  


### Chapter 6: SportsStore: Checkout and Orders    
Subjects Covered:  
* URL Routing  
* Form validation using Vulidate  
Vuelidate supports a wide range of validators. See https://monterail.github.io/vuelidate for details.

### Chpater 7: SportsStore: scaling and Administration  
The Faker package is described at http://marak.github.io/faker.js  
Subjected Covered:  
* Dealing with large data - pagination
* Authentication
* Admin features

### Chpater 8: Administration and Deployment
Deployment process todo:
* Data Store: Disable strict mode
* Load some features on demand - those that are only needed by a few users e.g admin feature.
* You may want to configure the app so that prefetch hints are not sent to the browser.
* Build the app for deployment  
`$ npm run build`  
* The generated files will be deposited in a dist directory in the project root.

**Test the applcation**
* Install express and connect-history-api-fallback for URL routing.  
`$ npm install --save-dev express@4.16.3`   
`$ npm install --save-dev connect-history-api-fallback@1.5.0`
* Setup the express server.
* start the server  
`nodemon server.js`  

**Deploying the application using docker**  
* Create a package.jon file that will install the packages required to run the application - `deploy-package.json` See deploy-package.json.  
* Create the docker file. See dockerfile    
* Build the docker image:  
`$ docker build . -t sportsstore -f dockerfile`  
* Create a docker container:  
`$ docker run -p 3000:8081 sportsstore`  
Here the docker file exposed the container at port 8081 and this is mapped to port 3000 in the external world, therefore the application can be accessed at _localhost:3000_   

## PART II: Vue.js in Details

### Chapter 9: Undertanding Vue.js

## PART III: Advanced Vue.js Features

### Chapter 18: Loosely Couple components
Caution Any component can make changes to a reactive service and not just the component that defines
it. This can be a useful feature, but it can also cause unexpected behavior.  

A factory function is required when you provide default values for services, which is why the value of
the default property is assigned a function that returns another function as its result.
When Vue.js creates the component, it will invoke the default function to get the object that will be used as the service.  

The first step in creating an event bus is to define the service in the Vue object.
The value for the service is a new Vue object.
It produces an object that can be used to send and receive custom Vue.js events programmatically without relying on the application’s
hierarchy of components.

## Chapter 19: Using RESTful Web services

## Chapter 20: Using data Store  
Install the vuex package  
`$ npm install vuex@3.0.1`  

__Accessing store modules having namespace options__
For state properties:  
`state.pref.stripedTable`
`this.$store.state.prefix.stripedTable`

For getters:  
`this.$store.getters['prefix/getterName']`

For mutations:
`this.$store.commit('prefix/mutationName')`  
`context.commit('prefix/MutationName')`

For actions:   
`this.$store.dispatch('prefs/ActionName')`
`context.dispatch('prefs/ActionName')`

Where prefix is the key assigned to the module under the `modules` object of the root `Store` option object.  

## Chapter 25: Transitions  
