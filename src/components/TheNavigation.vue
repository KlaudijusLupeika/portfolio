<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/"><hr />
          About</router-link>
      </li>
      <li>
        <router-link to="/portfolio"
          ><hr />
          Portfolio</router-link
        >
      </li>
      <li>
        <a href="//drive.google.com/uc?export=download&id=1rT-7iPZzrm5gtsH85UM7zklm8fjs8EXw"
          ><hr />
          Resume</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  margin-top: 10vh;
}
#nav a {
  color: #707070;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1vw;
  letter-spacing: 0.4vw;
  margin: 0 0 0 5.4vw;
  align-items: center;
  justify-content: left;
  transition: 0.2s ease-in;
  &:hover {
    color: white;
  }
  &:hover hr {
    color: white;
    width: 4rem;
  }
}
a hr {
  margin: 0 2rem 0 0;
  width: 2rem;
  border: none;
  border-top: 1px solid;
  display: inline-block;
  transition: 0.2s ease-in;
}
#nav .router-link-exact-active {
  color: #fff;
  text-decoration: none;
}
#nav .router-link-exact-active hr {
  width: 4rem;
}
@media screen and (max-width: 768px) {
  #nav {
    text-align: center;
    margin-top: 5vw;
    hr {
      display: none;
    }
    li {
      padding: 0;
      display: inline-block;
    }
    a {
      margin: 3vw;
      font-size: 4vw;
    }
  }
}
</style>
