<template>
<div class="result">
<h2>Quiz terminé !</h2>
<p>{{ this.resultMessage() }}<br>
    Tu as obtenu un score de {{ nbOfQuestions - falseAnswers }} sur {{ nbOfQuestions }}<br>
    Soit {{ falseAnswers }} mauvaises réponses
</p>
<div class="answers" v-for="item in quizDatas" :key="item">
<h3>{{ item.question }}</h3>
<p>Bonne réponse : {{ item.answer }}<br>
{{ item.explanation }}</p>
</div>
<button @click="reloadPage">recommencer</button>
</div>
</template>

<script>
export default {
    name: 'ShowResult',
    props: {
        nbOfQuestions: Number,
        falseAnswers: Number,
        quizDatas: Array 
    },
    methods: {
        reloadPage(){
            location.reload()
        },
        resultMessage(){
            if (this.falseAnswers < this.nbOfQuestions/2){
                return "Félicitations"
            }
            else {
                return "Ton score est pas bon"
            }
        }
    }
}
</script>
<style scoped lang="scss">
.result {
    background: linear-gradient(aqua, aquamarine);
    padding: 1em;
}
.answers {
  padding: 1em;
  text-align: left;  
}
</style>