<template>
  <div class="col-sm-12">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse container" id="navbarColor01">
         <a class="navbar-brand" href="#">Navbar</a>
         <ul class="navbar-nav mr-auto">
           <li class="nav-item active">
             <router-link class="nav-link" v-bind:to="{name: 'home'}">Home <span class="sr-only">(current)</span></router-link>
           </li>
           <li class="nav-item">
             <!-- The attribute :to is short form of v-bind:to -->
             <router-link class="nav-link" :to="{name: 'blog'}">Blog</router-link>
           </li>
           <li class="nav-item">
             <router-link class="nav-link" :to="{name: 'services'}">Services</router-link>
           </li>
           <li class="nav-item">
             <router-link class="nav-link" v-bind:to="{name: 'contact'}">Contact</router-link>
           </li>
         </ul>
         <form class="form-inline my-2 my-lg-0">
           <input class="form-control mr-sm-2" type="text" placeholder="Search">
           <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
         </form>
       </div>
     </nav>
     <div class="container">
        <transition name="moveInUp">
          <router-view />
        </transition>
     </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 1s ease-in;
}

.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
