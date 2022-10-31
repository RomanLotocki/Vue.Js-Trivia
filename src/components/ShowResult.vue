<template>
<div class="result">
<h2>Quiz terminé !</h2>
<p>{{ this.resultMessage() }}<br>
    Tu as obtenu un score de {{ nbOfQuestions - falseAnswers }} sur {{ nbOfQuestions }} 
</p>
<div class="answers" v-for="item in quizDatas" :key="item">
<h3>{{ item.question }}</h3>
<p>Bonne réponse : {{ item.answer }}<br>
{{ item.explanation }}</p>
</div>
<p class="button">
    <button @click="reloadPage"><span>recommencer</span></button>
</p>
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
                return "Ah... Ton score n'est pas dingue. Tu devrais te cultiver un peu plus..."
            }
        }
    }
}
</script>
<style scoped lang="scss">
.result {
    padding: 1em;
}
.answers {
  padding: 1em;
  text-align: justify;  
}
</style>