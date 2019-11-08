<template>
  <aside class="sidenav-main nav-collapsible sidenav-dark" v-bind:class="collapseSideBar"  v-on:mouseover="showSideBar" v-on:mouseout="hideSideBar">
    <div class="brand-sidebar">
      <h1 class="logo-wrapper">
        <a class="brand-logo darken-1" href="index.html">
          <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/logo/materialize-logo.png" alt="materialize logo">
          <span class="logo-text hide-on-med-and-down">Materialize</span>
        </a>
        <a class="navbar-toggler" href="#">
          <i class="material-icons">radio_button_checked</i>
        </a>
      </h1>
    </div>
    <!-- non collapse nav -->
    <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps ps--active-y" id="slide-out" data-menu="menu-navigation">
      <li class="bold close open" v-bind:class="isActiveDropdown('dashboard')">
        <a v-on:click="clickDropdown('dashboard', $event)" class="collapsible-header waves-effect waves-cyan" tabindex="0">
          <i class="material-icons">settings_input_svideo</i>
          <span class="menu-title" data-i18n="">Dashboard</span>
          <span class="badge badge pill orange float-right mr-10">3</span>
        </a>
        <transition name="drop-down">
          <div class="collapsible-body" style="display: block" v-show="dropdown.dashboard">
            <ul class="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a class="collapsible-body" href="dashboard-modern.html" data-i18n=""><i class="material-icons">radio_button_unchecked</i><span>Modern</span></a>
              </li>
              <li class="active"><a class="collapsible-body active" href="dashboard-ecommerce.html" data-i18n="" style="display: block;"><i class="material-icons">radio_button_unchecked</i><span>eCommerce</span></a>
              </li>
              <li><a class="collapsible-body" href="dashboard-analytics.html" data-i18n=""><i class="material-icons">radio_button_unchecked</i><span>Analytics</span></a>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
    <!-- end non collapse nav -->
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'admin-navbar',
  data() {
    return {
      dropdown: {
        dashboard: false
      }
    }
  },
  computed: {
    ...mapGetters(['collapseSideBar']),
  },
  methods: {
    ...mapActions(['toggleNavBar']),
    showSideBar: function() {
      let navbar = []
      navbar['collapse'] = false
      this.toggleNavBar(navbar)
    },
    hideSideBar: function() {
      let navbar = []
      navbar['collapse'] = true
      this.toggleNavBar(navbar)
    },
    clickDropdown: function(label, e) {
      this.dropdown[label] = !this.dropdown[label]
      e.preventDefault()
    },
    isActiveDropdown: function(label) {
      return this.dropdown[label] === true ? 'active' : ''
    },
  }
}
</script>

<style>
  .drop-down-enter-active {
    animation: drop-down .2s;
  }

  .drop-down-leave-active {
    animation: drop-down .1s reverse;
  }

  @keyframes drop-down {
    from {
      transform: scaley(0) translate3d(0, -100%, 0);
      height: 0;
    }
    to {
      transform: scaley(1) translate3d(0, 0, 0);
    }
  }
</style>