<template>
      <div class="container">
            <div class="slider">
                  <div class="slide">
                        <div class="slide-content" >
                              <div class="stack">html sass vue.js</div>
                              <div class="project-name">Portfolio</div>
                              <div class="project-comment">First portfolio website.<span> Continuing my newly established relationship with
                                    Vue.js, I have added some SaSS to the list and came up with this portfolio.</span></div>
                              <div class="links"> 
                                    <a href="//github.com/itstoocloudy/pervezkgreitai"><i class="fab fa-github"></i></a>
                                    <a href="//heuristic-bartik-64c1d9.netlify.app/"><i class="fas fa-external-link-alt"></i></a>
                              </div>
                        </div>
                        <div class="project-image">
                              <img src="../assets/pf.png" alt="">
                        </div>
                  </div>
                  <div class="slide">
                        <div class="slide-content">
                              <div class="stack"> html Sass Vue.js</div>
                              <div class="project-name">TodoApp</div>
                              <div class="project-comment">Simple todo list application<span> which definitely helped me to understand more
                                    of a beautiful framework Vue.js and how does it work.</span></div>
                              <div class="links"> 
                                    <a href="//github.com/itstoocloudy/TodoList"><i class="fab fa-github"></i></a>
                                    <a href="//itstoocloudy-todoapp.netlify.app/"><i class="fas fa-external-link-alt"></i></a>
                              </div>
                        </div>
                        <div class="project-image">
                              <img src="../assets/td.png">
                        </div>
                  </div>
                  <div class="slide">
                        <div class="slide-content">
                              <div class="stack">HTML CSS VUE.js</div>
                              <div class="project-name">WeatherApp</div>
                              <div class="project-comment">Application based on API<span>. First web application created by myself. 
                                    Used Vue.js framework and API calls to extract information. Combining the new technologies,
                                    found my way to establish foundations with the new framework and APIs. </span></div>
                              <div class="links"> 
                                    <a href="//github.com/itstoocloudy/weather-app"><i class="fab fa-github"></i></a>
                                    <a href="//hungry-wright-32e261.netlify.app/"><i class="fas fa-external-link-alt"></i></a>
                              </div>
                        </div>
                        <div class="project-image">
                              <img src="../assets/we.png">
                        </div>
                  </div>
                  <div class="slide">
                        <div class="slide-content">
                              <div class="stack">HTML CSS BOOTSTRAP</div>
                              <div class="project-name">Pervežk Greitai</div>
                              <div class="project-comment">One page website<span> made using Bootstrap. A quick and
                                    simple project to brush up my knowledge. During
                                    this project, I have learned how to use Bootstrap library and got 
                                    deeper understanding in website responsiveness.</span></div>
                              <div class="links"> 
                                    <a href="//github.com/itstoocloudy/pervezkgreitai"><i class="fab fa-github"></i></a>
                                    <a href="//heuristic-bartik-64c1d9.netlify.app/"><i class="fas fa-external-link-alt"></i></a>
                              </div>
                        </div>
                        <div class="project-image">
                              <img src="../assets/pg.png">
                        </div>
                  </div>
                  <div class="slide"> 
                        <div class="slide-content">
                              <div class="stack">Opencart</div>
                              <div class="project-name">Viskas Vaikams</div>
                              <div class="project-comment">An e-commerce website made using a popular CMS<span>. Setting up and maintaining this project,
                                    while applying a custom drawn theme by myself, gave me understanding how does coding work.</span></div>
                              <div class="links"> 
                                    <a href="//www.viskasvaikams.lt"><i class="fas fa-external-link-alt"></i></a>
                              </div>
                        </div>
                        <div class="project-image">
                              <img src="../assets/vvlt.png" alt="">
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
export default {
      data(){
            return{
                  isActive: false
            }
      },
}
</script>
<style lang="scss" scoped>
.container{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5vw;
}
.slider{
      width: 90%;
      height: 80vh;
      margin-left: 10vw;
      color: #707070;
      overflow: scroll;
      overflow-x: hidden;
      
}
.slide{
      width: 48vw;
       margin: 0 0 0.8vh 2vw;

       background-color: #1b1b1d;
       transition: 0.2s ease-in;
       display: flex;
                   
      &:hover .project-name{
            color: #fff;
            margin-top: 0vh;
      }
      &:hover .slide-content{
            padding-top: 2vh;
            color: #858585;
      }
      &:hover .links{
            display: block;
      }
      &:hover {
             width: 52vw;
             
             margin: -0.8vh 0 0 0;
             background-color: #202022;
      }
      &:hover img {
            opacity: 1;
            display: block;
      }
      &:hover span {
            position: relative;
            opacity: 1;
      }
      span{
            opacity: 0;
            transition: 0.2s ease-in;
            
            
      }

}       
::-webkit-scrollbar{
      background-color: transparent;
      width: 2px;

}
::-webkit-scrollbar-thumb{
      background-color: #3c3c3f;
}
.slide-content{
      padding: 1rem 0 0 3rem;
      color: #4d4646;

      .stack{
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 100;
            font-size: 0.7rem;

      }
      .project-name{
            font-size: 3vw;
            color: #848484;
            line-height: 2rem;
            padding: 2vw 0 1vw 0;
            transition: 0.2s ease-in;
      }
      .project-comment{
            font-size: 0.9vw;
            width: 20vw;
            text-align: justify;

      }
}
.project-image{
      overflow: hidden;
      transition: 0.2s ease-in;

      img{
            height: 23vw;
            padding: 3rem;
            overflow: hidden;
            margin-left: 2vw;
            display: none;
            transition: 0.2s ease-in;
      }
}
.links{
      margin-top: 1vw;
      font-size: 1.8vw;
      display: none;
      transition: 0.2s ease-in;
      i{
            
            transition: 0.2s ease-in;

            &:hover{
                  color: white;
            }
            
      }
      a{
            text-decoration: none;
            color:#858585;
            margin-right: 2vw;
      }
}
@media screen and (max-width: 768px) {
      .container{
      margin: 0;
      display: flex;
      align-items: center;
      
}
.slider{
      height: 100%;
      width: 90%;
      margin: 0;
      color: #707070;
      overflow: visible; 

}
.slide{
      width: 100%;
      padding-bottom: 5%;
       margin: 0 0 0.8vh 0;
       transition: 0.2s ease-in;
       display: flex;
                   
      &:hover .project-name{
            font-size: 9vw;
            margin-top: 5vw;
            color: #fff;
            line-height: 2rem;
            padding: 2vw 0 1vw 0;
            transition: 0.2s ease-in;
      }
      &:hover .slide-content{
            padding: 2rem 0 0 2rem;
      }


      &:hover {
             margin: 0 0 0.8vh 0;
             width: 100%;
             background-color: #202022;
      }
      &:hover img {
            opacity: 1;
            display: block;
      }
      span{
            opacity: 1;
            transition: 0.2s ease-in;
      }

}       
.slide-content{
      padding: 2rem 0 0 2rem;
      color: #4d4646;

      .stack{
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 100;
            font-size: 1.5rem;

      }
      .project-name{
            font-size: 9vw;
            margin-top: 5vw;
            color: #fff;
            line-height: 2rem;
            padding: 2vw 0 1vw 0;
            transition: 0.2s ease-in;
      }
      .project-comment{
            margin-top: 5vw;
            font-size: 4vw;
            width: 93%;
            text-align: justify;

      }
}
.project-image{
      display: none;
      overflow: hidden;
}
.links{
      margin-top: 2vw;
      font-size: 5vw;
      display: block;
      transition: 0.2s ease-in;
      i{
            
            transition: 0.2s ease-in;

            &:hover{
                  color: white;
            }
            
      }
      a{
            text-decoration: none;
            color:#858585;
            margin-right: 5vw;
      }
}
}
</style>