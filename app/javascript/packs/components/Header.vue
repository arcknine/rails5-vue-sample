<template>
  <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="about">About Us</router-link></li>
        <li><router-link to="contact">Contact Us</router-link></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="about">About Us</router-link></li>
        <li><router-link to="contact">Contact Us</router-link></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'vheader'
}
</script>