<template>
  <div class="container">
    <div class="square">
      <h1>About me</h1>
      <br />
      <p>
Quality assurance specialist, working as a validation engineer in one of the largest manufacturers of 
medical devices for respiratory support. Organized and results-oriented individual with expertise in 
risk management, while following cGMP regulations and meeting ISO standards. Self-learner of test automation 
and experienced manual tester seeking to boost efficiency in testing, ultimately leading to build software 
of better quality.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5vw;
  color: white;

  .square {
    margin-left: 10vw;
  }
}
.square {
  margin-left: 10vw;
  height: 50vh;
  color: #7a6f6f;
  letter-spacing: 1px;
  font-weight: 100;
}
h1 {
  font-weight: 400;
  color: #848484;
  span {
    font-weight: 600;
  }
}
.square span {
  color: white;
}
.name {
  text-align: right;
  margin-right: 1vw;
}

@media screen and (max-width: 1250px) {
  .container .square {
    margin-left: 5vw;
    margin-right: 2vw;

    h1 {
      font-size: 4vw;
    }
    p {
      font-size: 1.7vw;
    }
  }
}
@media screen and (max-width: 768px) {
  .container {
    display: block;
  }
  .container .square {
    margin-left: 5vw;
    margin-right: 5vw;

    h1 {
      font-size: 7vw;
    }
    p {
      font-size: 4vw;
    }
  }
}
@media screen and (max-width: 550px) {
  .container .square {
    background-color: #151515;
    p {
      font-size: 2.8vw;
    }
  }
}
</style>
