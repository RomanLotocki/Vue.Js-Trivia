<template>
  <div class="about">
    <h1>A propos...</h1>
    <h2>Le projet</h2>
    <p><b>Try To Know</b> est une petite application web destinée à tester vos connaissances sur des sujets divers et variés et à apprendre des choses par la même occasion</p>
    <p>L'idée est à terme de proposer un grand nombres de questions et des nouveaux features comme par exemple des questionnaires thématiques mais aussi la possibilité de jouer à plusieurs.</p>
    <p>L'application est réalisée avec <a href="https://vuejs.org/" class="underline">le framework javascript Vue.js</a></p>

    <h2>Le dev</h2>
    <p>Derrière cette application, il y a moi, Roman. Je suis développeur spécialisé dans le back-end des sites web même si j'aime aussi passé mon temps (parfois beaucoup de temps) sur le design, l'intégration bref le front-end.</p>
    <p>Try To Know est un peu le résultat de deux choses que j'affectionne particulièrement : apprendre et coder... ou apprendre à coder... ou coder en apprenant...</p>
    
    <p>Bref... Vous avez compris.</p>
    <p>Vous allez irrémédiablement découvrir mes centres d'intérêt au fil des questions même si je promets d'être le plus exhaustif possible dans le choix des thématiques.</p>
    <p>Si ce projet vous intéresse, si vous souhaitez y collaborer que ce soit sur le contenu ou sur la forme, n'hésitez pas à me contacter</p>
    <p>En attendant : Bonne Chance !</p>
  </div>
</template>

<style lang="scss">
 .about {
  max-width: 1024px;
  text-align: justify;
  padding: 0.5em;
  margin: 30px 0;
 }

 h2 {
  margin-top: 50px;
 }

 a {
  text-decoration: none;
  color: #fcfdfd;
 }
 .underline{
  position: relative;
}

.underline::before{
  content: '';
  position: absolute;
  bottom: -2px;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #F4CD1E;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .underline:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>