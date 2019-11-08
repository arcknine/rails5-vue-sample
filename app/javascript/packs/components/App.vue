<template>
  <div id="app">
    <Header/>
    <h1>{{ title }}</h1>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
