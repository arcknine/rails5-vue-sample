<template>
  <div id="app">
    <Header/>
    <NavBar/>

    <div id="main" v-bind:class="collapseMainContainer">
      <div class="row">
        <Breadcrumb :crumbs="this.$route.meta.crumbs" v-if="this.$route.name != 'Home'"/>
        <div class="col s12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Header from './Header'
import NavBar from './NavBar'
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    Breadcrumb
  },
  computed: {
    ...mapGetters(['collapseMainContainer']),
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
