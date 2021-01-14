export default {
  install(Vue, options) {
    Vue.mixin({
      created() {
        // This will be called any time a component is initialized and it's created method is called
        console.log('Hello', options);
      }
    });

    console.log('installed');
    if (!localStorage.getItem('store')) {
      localStorage.setItem('store', JSON.stringify(options));
    }

    // Instance property
    Vue.prototype.$store = {
      get(key) {
          const store = JSON.parse(localStorage.getItem('store'));
          return store[key];
      },
      set(key, value) {
        const store = JSON.parse(localStorage.getItem('store'));
        store[key] = value;
        localStorage.setItem('store', JSON.stringify(store));
      }
    }

    // Global filter
    Vue.filter('currency', value => {
        if (isNaN(value)) {
           return NaN;
        }
        return  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
    });

    // Directive
    Vue.directive("highlight", {
        inserted(el) {
            el.style.background = "silver";            
        }
    })

  }
}