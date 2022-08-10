<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WelcomeComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeComponent from '@/components/Welcome.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeComponent,
  }
}
</script>
