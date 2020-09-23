<template>

  <div class="header clearfix">

    <nav class="">

      <router-link tag="li" to='/login' v-if=" ! isAuth">
        <a href="">Login</a>
      </router-link>

      <router-link tag="li" to='/register' v-if=" ! isAuth">
        <a href="">Register</a>
      </router-link>

      <router-link tag="li" to='/feed' v-if="isAuth">
        <a href="">Feed</a>
      </router-link>

      <router-link tag="li" to='/products' v-if="isAuth">
        <a href="">Products</a>
      </router-link>

      <router-link tag="li" to='/category' v-if="isAuth">
        <a href="">Category</a>
      </router-link>

      <router-link tag="li" to='/proposal' v-if="isAuth">
        <a href="">Proposal</a>
      </router-link>

      <router-link tag="li" to='/categories/create' v-if="isAuth">
        <a href="">Category Create</a>
      </router-link>

      <router-link tag="li" to='/customers/create' v-if="isAuth">
        <a href="">Customer Create</a>
      </router-link>

      <router-link tag="li" to='/products/create' v-if="isAuth">
        <a href="">Product Create</a>
      </router-link>

      <router-link tag="li" to='/proposals/create' v-if="isAuth">
        <a href="">Proposal Create</a>
      </router-link>

      <router-link tag="li" to='/logout' v-if="isAuth">
        <a href="">Logout</a>
      </router-link>

    </nav>

  </div>
  
</template>

<script>

  export default {
    data () {
      return {
        isAuth: null
      }
    },

    created () {
      this.isAuth = this.$auth.isAuthenticated()
      this.setAuthenticatedUser()
    },

    methods: {
      setAuthenticatedUser () {
        this.$http.get('api/user')
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)

          console.log(this.$auth.getAuthenticatedUser())
        })
      }
    }
  }

</script>

<style>
 .router-link-active {
  background-color: green;
  color: red;
}
</style>
