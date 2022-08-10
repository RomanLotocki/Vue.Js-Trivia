<template>
  <div v-if="welcomeComplete" class="welcome">
    <h1>Bienvenue sur le projet Vue.Js Trivia</h1>
    <p>
      Etes-vous pret à tenter le quiz ?<br>
      Pour commencer, entrez votre pseudo et validez
    </p>
    <label for="name">Votre pseudo : </label>
    <input v-model="userName" type="text" id="name" name="name" required minlength="4" maxlength="10" size="12">
    <p><button>Commencer</button></p>
    <p>Bonjour : {{ this.userName }}</p>
  </div>
  <div v-else class="quiz">
    <h2>Question 1</h2>
    <p>
      Comment s'appelle la zone du système solaire, s'étendant au dela de l'orbite de Neptune et composée de divers petits corps célestes dont Pluton ?
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
export default {
  name: 'WelcomeComponent',
  props: {
    msg: String
  },
  data() {
    return {
      userName: "",
      welcomeComplete: true,
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
