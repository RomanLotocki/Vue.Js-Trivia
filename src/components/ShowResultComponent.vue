<template>
    <div class="result">
        <h2>Quiz terminé !</h2>
        <p>Tu as obtenu un score de {{ nbOfQuestions - falseAnswers }} sur {{ nbOfQuestions }}</p>
        <p>{{ this.resultMessage() }}</p>
        <p class="button">
            <button @click="reloadPage"><span>recommencer</span></button>
        </p>
        <div class="answers" v-for="(item, index) in quizDatas" :key="item">
            <h3>{{ item.question }}</h3>
            <p class="userA"> Ta réponse : {{ this.answers[index] }}</p>
            <p class="correctA">Bonne réponse : {{ item.answer }}</p>
            <p>{{ item.explanation }}</p>
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
        quizDatas: Array,
        answers: Array
    },
    methods: {
        reloadPage() {
            location.reload()
        },
        resultMessage() {
            if (this.falseAnswers < this.nbOfQuestions / 2) {
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

.answers {
    padding: 1em;
    text-align: justify;
}

.userA {
    font-weight: bold;
    color: #F4CD1E;
}

.correctA {
    font-weight: bold;
    color: #83d032;
}
</style>