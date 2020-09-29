<template>
  <div id="app" class="">
    <div class="left animate__fadeInLeft animate__animated">
      <div class="hello">Hello, I'm<br /><span>Klaudijus.</span></div>
      <div class="front-end">Front end Developer<br />UX/UI Designer</div>
      <TheNavigation />
      <div class="icons">
        <div class="icon">
          <a href="mailto:lupeika.k@gmail.com"
            ><i class="far fa-envelope"></i
          ></a>
        </div>
        <div class="icon">
          <a href="https://www.linkedin.com/in/klaudijus-lupeika" target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="right animate__fadeInRight animate__animated">
      <transition name="move" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300;400;500;600;700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hind Guntur", sans-serif;
}
body {
  background-color: #151515;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-color: #151515;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  transition: 0.2s;
}
.left {
  width: 30%;
  animation-duration: 2s;
}
.right {
  width: 70%;
  animation-duration: 2s;
}
.hello {
  margin: 5vw 0 0 5vw;
  color: white;
  font-size: 6vw;
  line-height: 5vw;
  font-weight: 300;
}
.hello span {
  font-weight: 600;
  letter-spacing: 2px;
}
.front-end {
  font-size: 0.7rem;
  margin: 0.3rem 0 0 5.4vw;
  line-height: 1rem;
  letter-spacing: 0.4rem;
  width: 60%;
  text-transform: uppercase;
  color: #707070;
  text-align: left;
  font-weight: 100;
}
.front-end span {
  color: #fff;
}
.icons {
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 10vw 0 0 5.4vw;
}
.icon {
  margin-right: 1vw;
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: #707070;
    transition: 0.2s ease-in;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
}
.move-enter-active,
.move-leave-active {
  transition: opacity 0.7s, transform 0.7s;
}
.move-enter,
.move-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
@media screen and (max-width: 768px) {
  #app {
    display: block;
  }
  .icon {
    width: 100%;
  }
  .left,
  .right {
    width: 100%;
    background: #151515;
  }
  .hello {
    margin: 0;
    padding: 4vw;
    font-size: 15vw;
    line-height: 13vw;
  }
  .icons {
    margin: 3vw;
    text-align: center;
    color: #707070;
  }
  .icon {
    font-size: 1.4rem;
  }
}
</style>
