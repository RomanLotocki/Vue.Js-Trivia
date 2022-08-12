<template>
  
  <div v-if="welcomeComplete" class="welcome">
    <h1 @click="getTitle" ref="title">Bienvenue sur le projet Vue.Js Trivia</h1>
    <p>
      Etes-vous pret à tenter le quiz ?<br>
      Pour commencer, entrez votre pseudo et validez
    </p>
    <label for="name">Votre pseudo : </label>
    <input v-model="userName" type="text" id="name" name="name" required maxlength="10" size="12" @keyup.enter="goToQuestion">
    <p><button @click="goToQuestion">Commencer</button></p>
    <p>Bonjour : {{ this.userName }}</p>
  </div>
  
  <div v-else class="quiz" v-for="item in quizDatas.slice(this.sliceA, this.sliceB)" :key="item.id">
    <h2>Question {{ item.id }}</h2>
    <p>
      {{ item.question }}
    </p>
    <ul v-for="(choice, index) in item.choices" :key="choice" @click="getAnswers(index)">
        <li ref="userAnswer"> {{ choice }}</li>
        <button>Valider</button>
        
    </ul> 
    <button @click="backQuestion" v-if="this.sliceA != 0">Back</button>
    <button @click="nextQuestion" v-if="sliceA != quizDatas.length-1">Next</button>
    <button v-if="sliceA == quizDatas.length-1">Send</button>
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
      sliceA: 0,
      sliceB: 1,
      answers: [],
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
    },

    nextQuestion(){
        return [this.sliceA += 1, this.sliceB += 1]
    },
    backQuestion(){
        return [this.sliceA -= 1, this.sliceB -= 1]
    },
    getAnswers(index){
      console.log(this.$refs.userAnswer[index].innerText)
    },
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
