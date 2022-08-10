<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <QuizComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import QuizComponent from '@/components/Quiz.vue'

export default {
  name: 'HomeView',
  components: {
    QuizComponent,
  }
}
</script>
