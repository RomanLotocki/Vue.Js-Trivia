<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <footer>
    <p>Created by Roman Lotocki<br>
    Powered by Vue.js</p>
  </footer>
</template>

<style lang="scss">

html{
  height: 100%;
  background: linear-gradient(to right, #6441a5, #2a0845);
}

#app {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  text-align: center;
  color: #fcfdfd;
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fcfdfd63;

    &.router-link-exact-active {
      color: #fcfdfd;;
    }
  }
}

footer {
  p {
    margin: 0;
    padding: 1em;
    font-size: 0.8em;
  }
}

.welcome, .quiz, .result {
  max-width: 1024px;
  margin: auto;
}

.button {
  display: flex;
  justify-content: center;
}

button {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 130px;
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

button:hover {
  animation: bnrotate 0.7s ease-in-out both;
}

button:hover span {
  animation: bnstorm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes bnrotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes bnstorm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
</style>
