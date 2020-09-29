<template>
  <div class="container">
    <div class="square">
      <h1>About me</h1><br>
      <p> Since the early days, I was always amused by web design.
        It all started with editing html templates from various websites. 
        While at first it seemed like a fun hobby, I have managed to create one of
        my first projects - an ecommerce website based on <span>Opencart CMS</span>. After my first
        project, I have made a decision to acquire a degree and to study <span>Organizational
        Management BSc</span>. At this stage, I have started to slowly drift away from web
        development...</p><br>
      <p>Fast forward 7 years, here I am - one diploma in my pocket and
          another one coming up. Since the attraction in web development have never ended,
          I have decided to acquire another degree - I am a 
          third year student in <span>Computing Technologies BSc</span>,
          looking forward to make a professional carrer change and step in to IT industry.
          Today, I enjoy doing front-end
           development and realised, I can spend countless 
           hours with <span>Vue.js</span> and <span>CSS</span>.</p><br>
      <p class="name"> Klaudijus</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5vw;
  color: white;

  .square{
    margin-left: 10vw;
  }
}
.square{
  margin-left: 10vw;
  height: 50vh;
  color: #7a6f6f;
  letter-spacing: 1px;
  font-weight: 100;
}
h1{
  font-weight: 400;
  color:  #848484;;
  span{
    font-weight: 600;
  }
}
.square span{
  color: white;
}
.name{
  text-align: right;
  margin-right: 1vw;
}

@media screen and (max-width: 1250px) {
  .container .square{
    margin-left: 5vw;
    margin-right: 2vw;

    h1{
      font-size: 4vw;
    }
    p{
      font-size: 1.7vw;
    }
  }
}
@media screen and (max-width: 768px) {
  .container{
    display: block;
  }
  .container .square{
    margin-left: 5vw;
    margin-right: 5vw;
    
    h1{
    font-size: 7vw;
    }
    p{
      font-size: 4vw;
    }
  }
}
@media screen and (max-width: 550px) {
      
    .container .square{
      background-color: #151515;
    p{
      font-size: 2.8vw;

    }
  }
}
</style>