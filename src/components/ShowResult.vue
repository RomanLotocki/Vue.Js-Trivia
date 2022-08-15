<template>
<h2>Quizz terminé !</h2>
<p>Tu as obtenu un score de {{ nbOfQuestions - falseAnswers }} sur {{ nbOfQuestions }}</p>
<p>Soit {{ falseAnswers }} mauvaises réponses</p>
<button @click="reloadPage">recommencer</button>
</template>

<script>
export default {
    name: 'ShowResult',
    props: {
        nbOfQuestions: Number,
        falseAnswers: Number 
    },
    methods: {
        reloadPage(){
            location.reload()
        }
    }
}
</script>