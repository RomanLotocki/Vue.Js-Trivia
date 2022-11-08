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
        <p>Bienvenue {{ this.userName }}</p>
        <p>Clique sur commencer pour lancer le quiz</p>
        <p class="button"><button @click="goToQuiz()"><span>commencer</span></button></p>
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
        }
    }
}

</script>

<style scoped lang="scss">
.button {
    margin-top: 40px;
}
</style>