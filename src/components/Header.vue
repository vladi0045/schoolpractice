<template>
  <b-navbar toggleable="lg" :sticky="true" variant="dark" type="dark" class="shadow">
    <b-nav>
      <b-navbar-brand>
        <b-button class="btn btn-outline-danger" squared to="/">
          <b-icon-shop></b-icon-shop>
        </b-button>
      </b-navbar-brand>
    </b-nav>
    <b-nav class="ml-auto">
      <b-nav-item to="/cart" right>
        <b-button class="btn btn-outline-danger" squared>
          <b-icon-card-checklist></b-icon-card-checklist>
          <b-badge>{{ countCardItems }}</b-badge>
        </b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button class="btn btn-outline-danger" squared id="profile-btn">
          <b-icon-person></b-icon-person>
        </b-button>
        <b-popover triggers="focus" placement="bottom" target="profile-btn">
          <Profile></Profile>
        </b-popover>
      </b-nav-item>
    </b-nav>
    <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
  </b-navbar>
</template>

<script>

import Profile from "./Profile";

export default {
  name: 'Header',
  components: {Profile},
  props: {
    countCardItems: Number
  },
  data() {
    return {}
  },
  watch: {},
  methods: {},
  mounted() {
  }
}
</script>