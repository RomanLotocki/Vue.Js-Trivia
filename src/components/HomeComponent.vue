<template>
    <div class="welcome">
        <img src="../assets/block.png" alt="Question Block">
        <h1>Try To Know</h1>

        <div v-if="this.userLog">
        <label for="name">Pour commencer, entrez un pseudo</label>
        <input placeholder="mon pseudo" v-model="userName" type="text" id="name" name="name" required maxlength="10"
            size="12" @keyup.enter="this.nameValidation()">
        <p class="button"><button @click="this.nameValidation()"><span>entrer</span></button></p>
    </div>
        <div v-else>
            <p id="welcomeMessage">Bienvenue {{ this.userName }} !</p>
            <p id="dynamicMessage">Clique sur commencer pour lancer le quiz</p>
            <div class="quizCardContainer">
                <div class="quizCard">
                    <p class="quizTitle">Contre la montre</p>
                    <button class="quizButton" @click="goToQuiz()"><span id="dynamicButton">commencer</span></button>
                    <img class="quizIcon" src="../assets/hourglass.svg" alt="hourglass" height="64" width="64" />
                </div>
                <div class="quizCard">
                    <p class="quizTitle">Mort subite</p>
                    <button class="quizButton" @click="goToQuiz()"><span id="dynamicButton">commencer</span></button>
                    <img class="quizIcon" src="../assets/hourglass.svg" alt="hourglass" height="64" width="64" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestComponent',

    data() {
        return {
            userName: "",
            userLog: true,
        }
    },

    methods: {
        nameValidation() {
            if (this.userName.length < 3) {
                return alert("Le pseudo doit comporter au moins 3 caractères");
            }
            else {
                this.userLog = false;
            }
        },

        goToQuiz() {
            this.$router.push({ name: 'quiz' });
            document.getElementById("dynamicButton").innerText = "Reprendre";
            document.getElementById("dynamicMessage").innerText = "Clique sur reprendre pour continuer ton Quiz";
            document.getElementById("welcomeMessage").remove();
        }
    }
}

</script>

<style scoped lang="scss">
.button {
    margin-top: 40px;
}

.quizCardContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.quizCard {
    margin: 20px;
    text-align: center;
}

.quizTitle {
    font-weight: bold;
    color: #F4CD1E;
}

.quizIcon {
    margin-top: 1em;
}

.quizButton {
    margin: auto;
}
</style>