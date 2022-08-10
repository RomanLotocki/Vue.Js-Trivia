<template>
  <div v-if="welcomeComplete" class="welcome">
    <h1>Bienvenue sur le projet Vue.Js Trivia</h1>
    <p>
      Etes-vous pret à tenter le quiz ?<br>
      Pour commencer, entrez votre pseudo et validez
    </p>
    <label for="name">Votre pseudo : </label>
    <input v-model="userName" type="text" id="name" name="name" required minlength="4" maxlength="10" size="12">
    <p><button @click="goToQuestion">Commencer</button></p>
    <p>Bonjour : {{ this.userName }}</p>
  </div>
  <div v-else class="quiz" v-for="item in quizDatas" :key="item.id">
    <h2>Question {{ item.id }}</h2>
    <p>
      {{ item.question }}
    </p>
    <ul>
        <li>La ceinture de Karaté</li>
        <li>La ceinture de d'astéroides</li>
        <li>La ceinture de Kuiper</li>
        <li>La ceinture de Newton</li>
    </ul>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: 'QuizComponent',
  data() {
    return {
      userName: "",
      welcomeComplete: true,
      quizDatas: sourceData.quizDb,
    }
  },
  methods: {
    goToQuestion() {
      if (this.userName.length >= 3) {
        return this.welcomeComplete = false
      }
      else {
        return alert ("Le pseudo doit comporter au moins 3 caractères")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome {
  background-color: aquamarine;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
