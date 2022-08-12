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
  
  <div v-else class="quiz" v-for="item in quizDatas.slice(this.sliceA, this.sliceB)" :key="item">
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
    <button @click="showResults" v-if="sliceA == quizDatas.length-1">Send</button>
  </div>
  <ShowResult></ShowResult>
</template>

<script>
import sourceData from '@/data.json'
import ShowResult from '@/components/ShowResult.vue'
export default {
  name: 'QuizComponent',
  components: {
    ShowResult
  },
  data() {
    return {
      userName: "",
      welcomeComplete: true,
      quizDatas: sourceData.quizDb,
      sliceA: 0,
      sliceB: 1,
      answers: [],
      itemIndex: 0,
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
        return [this.sliceA += 1, this.sliceB += 1, this.itemIndex += 1]
    },

    backQuestion(){
        return [this.sliceA -= 1, this.sliceB -= 1, this.itemIndex -= 1]
    },

    getAnswers(index){
      if (this.answers[this.itemIndex] === undefined){
      this.answers.push(this.$refs.userAnswer[index].innerText)
      }
      else {
        this.answers.splice(this.itemIndex, 1, this.$refs.userAnswer[index].innerText);
        }
      console.log(this.answers)
      console.log(this.itemIndex)
    },
    showResults(){
      // this.answers.forEach(function (element, index) {
      // console.log(element); // affiche "3", "5", "7"
      // console.log(index);  // affiche "0", "1", "2"
      // })
      let goodAnswers = []
      for (let item of this.quizDatas){
        goodAnswers.push(item.answer)
      }
      let comparedResults = []

      if(goodAnswers.length!=this.answers.length)
     return alert ("Vous n'avez pas répondu à toutes les questions")
    else
    {
     for (let i = 0; i <goodAnswers.length; i++){
      comparedResults.push(goodAnswers[i]!=this.answers[i] ? false : true)
     }
    }
      console.log(this.answers)
      console.log(goodAnswers)
      console.log(comparedResults)
    },

    nbrOfFalse(){

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
