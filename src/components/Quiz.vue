<template>
  <div v-if="quizComplete == false">
  <div v-if="welcomeComplete" class="welcome">
    <img src="../assets/block.png" alt="Question Block">
    <h1>Bienvenue sur Try To Know</h1>
    <label for="name">Pour commencer, entrez un pseudo</label>
    <input placeholder="mon pseudo" v-model="userName" type="text" id="name" name="name" required maxlength="10" size="12"
      @keyup.enter="randomQuiz(); goToQuestion()">
    <p class="button"><button @click="randomQuiz(); goToQuestion()"><span>commencer</span></button></p>
  </div>

  <div v-else class="quiz" v-for="item in quizDatas.slice(this.sliceA, this.sliceB)" :key="item">
    <p v-if="this.sliceA == 0"> Salut <b>{{ this.userName }}</b> !<br>Clique sur la bonne réponse puis sur le bouton valider pour passer à la suivante.<br>
    Bonne chance !!
    </p>
    <h3>
      #{{ this.itemIndex + 1 }} {{ item.question }}
    </h3>
    <div class="answerstab">
      <ul>
        <li v-for="(choice, index) in item.choices" :key="choice" @click="getAnswers(index)" ref="userAnswer">{{ choice }}</li>
      </ul>
  </div>
    <p class="button">
      <button @click="backQuestion" v-if="this.sliceA != 0"><span>retour</span></button>
      <button @click="nextQuestion" v-if="sliceA != quizDatas.length - 1"><span>valider</span></button>
      <button @click="showResults" v-if="sliceA == quizDatas.length - 1"><span>vérifier</span></button>
    </p>
  </div>
  </div>
  <ShowResult v-if="quizComplete" :nbOfQuestions = quizDatas.length :falseAnswers="falseCounter" :quizDatas ="quizDatas" :answers = "answers"/>
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
      falseCounter: 0,
      quizComplete: false,
    }
  },
  methods: {
    goToQuestion() {
      if (this.userName.length >= 3) {
        return this.welcomeComplete = false
      }
      else {
        return alert("Le pseudo doit comporter au moins 3 caractères")
      }
    },

    nextQuestion() {
      if (this.answers[this.itemIndex] != undefined){
      return [this.sliceA += 1, this.sliceB += 1, this.itemIndex += 1]
      }
      else {
        return alert("Vous devez sélectionner une réponse")
      }
    },

    backQuestion() {
      return [this.sliceA -= 1, this.sliceB -= 1, this.itemIndex -= 1]
    },

    /**
     * get the user answers on click and send it in an array
     * @param {number} index The index corresponding to the user's choice when clicking in the set of possible choices for the answer 
     */
    getAnswers(index) {
      if (this.answers[this.itemIndex] === undefined) {
        this.answers.push(this.$refs.userAnswer[index].innerText)
      }
      else {
        this.answers.splice(this.itemIndex, 1, this.$refs.userAnswer[index].innerText)
      }

      for (let item of this.$refs.userAnswer){
        item.style.color = "#fcfdfd"
        if(this.answers[this.itemIndex] == this.$refs.userAnswer[index].innerText){
          this.$refs.userAnswer[index].style.color = "#F4CD1E";
        }
      }
      console.log(this.answers);
    },
    
    showResults() {
      let goodAnswers = []
      for (let item of this.quizDatas) {
        goodAnswers.push(item.answer)
      }

      let comparedResults = []

      if (goodAnswers.length != this.answers.length)
        return alert("Vous n'avez pas répondu à toutes les questions")
      else {
        for (let i = 0; i < goodAnswers.length; i++) {
          comparedResults.push(goodAnswers[i] != this.answers[i] ? false : true)
        }
      }

      let counter = 0;
      for (let item of comparedResults) {
        if (item == false) {
          counter++
        }
      }
      return [this.falseCounter += counter, this.quizComplete = true] 
    },

    // Fisher-Yates algorithm : get each execution a shuffled array based on the datas files and choose the first five elements.
    randomQuiz() {
    for (let i = this.quizDatas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.quizDatas[i];
        this.quizDatas[i] = this.quizDatas[j];
        this.quizDatas[j] = temp;
      }
      this.quizDatas.splice(0, 5);
      return this.quizDatas;
  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome, .quiz {
  padding: 1em;
}
.answerstab {
  margin-bottom: 50px;
}

h1 {
  font-size: 30px;
  margin: 30px 0;
}

h3 {
  margin: 40px 0 ;
}

label {
  display: block;
  margin-bottom: 30px;
}

input {
  margin-bottom: 30px;
  height: 30px;
  width: 130px;
  border: 2px solid rgba(43,9,71,0.6);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 10px 0;
}

li:hover {
  font-weight: bold;
  font-size: large;
  color: #F4CD1E;
}

a {
  text-decoration: none;
  color: #fcfdfd;
}

button {
  margin-right: 0.5em;
  margin-left: 0.5em;
}
</style>
