new Vue({
  el: '#app',
  data() {
    return {
      pages: {
        home: {        
          label: 'Home',
          page: 'Home',
          active: true
        },
        about: {
          label: 'About',
          page: 'About',
          active: false
        }
      }
    }
  },
  computed: {
    links() {
      return Object.values(this.pages);
    }
  },
  methods: {
    changePage(page) {
      Object.values(this.pages).forEach(pg => {
        pg.active = false;
        if (pg.page == page) {
          pg.active = true;
        } 
      });
    }
  },
  template: `
    <div>
      <div class="container-fluid bg-primary">
        <Menu :links="links">
          <template v-slot:default="slotProps">
            <button class="btn btn-link nav-link" :class="{active: slotProps.link.active}" :data-page="slotProps.link.page" @click="changePage(slotProps.link.page)">
              {{ slotProps.link.label }}
            </button>
          </template>
        </Menu>
      </div>
      <div class="container">  
        <Home v-show="pages.home.active" />
        <About v-show="pages.about.active" />
      </div>
    </div>
  `
});