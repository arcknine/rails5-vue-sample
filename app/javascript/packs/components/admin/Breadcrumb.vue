<template>
  <div id="breadcrumbs-wrapper" data-image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/breadcrumb-bg.jpg&quot;);">
    <!-- Search for small screen-->
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <h5 class="breadcrumbs-title mt-0 mb-0">{{crumbs[crumbs.length - 1].name}}</h5>
        </div>
        <div class="col s12 m6 l6 right-align-md">
          <ol class="breadcrumbs mb-0">
            <li v-for="(crumb, index) in crumbs" class="breadcrumb-item" v-bind:class="isLast(index)">
              <template v-if="isLast(index)">
                {{crumb.name}}
              </template>
              <template v-else>
                <router-link :to="crumb.path">{{crumb.name}}</router-link>
              </template>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: ['crumbs'],
  methods: {
    isLast(index) {
      return index == this.crumbs.length - 1 ? 'active' : ''
    }
  }
}
</script>