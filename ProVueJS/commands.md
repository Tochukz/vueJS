## Pro VueJS
Find code sample at https://github.com/Apress/pro-vue-js-2  
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


## Chapter 6: SportsStore: Checkout and Orders    
Subjects Covered:  
* URL Routing  
* Form validation using Vulidate  
Vuelidate supports a wide range of validators. See https://monterail.github.io/vuelidate for details.

## Chpater 7: SportsStore: scaling and Administration  
The Faker package is described at http://marak.github.io/faker.js  
Subjected Covered:  
* Dealing with large data - pagination
* Authentication
* Admin features

## Chpater 8: Administration and Deployment
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