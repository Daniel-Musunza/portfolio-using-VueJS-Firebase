<template>
 
  <router-view/>
</template>
<script>


export default {
  name: 'App',
  
 
  computed: {
    user() {
          return this.$store.state.user.loggedIn;
    },
   
  },

}
</script>
