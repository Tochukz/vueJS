Vue.component('Menu', {
  props: {
    links: {
      type: Array,
      required: true,
      validate(links) {
        return links.every(link => {
            return typeof link === 'object' && link.hasOwnProperty('label') && link.hasOwnProperty('page');
        });
      }
    }
  },
  methods: {
   changePage(event) {
    console.log(event.target);
   }
  },
  template: `
   <div class="container"> 
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
       <button class="btn btn-link navbar-brand" href="#">Navbar</button>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
      
       <div class="collapse navbar-collapse" id="navbarColor02">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item" v-for="(link, index) in links" :key="index">
             <slot :link="link"></slot>
           </li>
         </ul>
         <form class="form-inline my-2 my-lg-0">
           <input class="form-control mr-sm-2" type="text" placeholder="Search">
           <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
         </form>
      </div>
    </nav>
   </div>
  `
});