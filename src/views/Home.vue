<template>
  <div class="home">
    <navbar></navbar>
    <router-view></router-view>
    <div class="hello d-none">
    <div class="container text-center">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>

      <alert mode="alert-success">
        First Alert
      </alert>
      <alert mode="alert-danger">
        Second Alert
      </alert>
      <alert mode="alert-primary">
        Third Alert
      </alert>

      <button-counter></button-counter>

      <div class="my-2">
        <input type="text" v-model="lastName" class="form-control" placeholder="Your name..">
        <p>Welcome, {{lastName}}</p>
      </div>

      <button class="btn btn-light" @click="ClickedMe">Click Me</button>
      <input type="text" class="input form-control-sm" @keypress.enter="DoSomething" placeholder="Please Write!!!">
      <br>

      <ul class="list-group">
        <li v-for="(student,index) in students" v-bind:key="index">
          {{ index+1 }}-{{ student }}
        </li>
      </ul>
    </div>
    </div>
    <login-modal></login-modal>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Home',
    props: {
    msg: String
  },
  data(){
    return{
      lastName: '',
      students:[
        'Stu1',
        'Stu2',
        'Stu3',
        'Stu4'
      ]
    }
  },
  methods:{
    ClickedMe(){
      console.log('Clicked!');
    },
    DoSomething(){
        this.lastName = $('.input').val();
        // this.lastName = document.querySelector('.input').value;
    }
  },
  mounted: ()=>{
    let content = $('.hello');
    if(window.location.pathname == '/'){
      if(content.hasClass('d-none'))
        content.removeClass('d-none')
    }
  },
  updated: ()=>{
    console.log(window.location)
    let content = $('.hello');
    if(window.location.pathname != '/'){
      console.log(window.location.pathname);
      content.addClass('d-none')
    }else{
      if(content.hasClass('d-none')){
        content.removeClass('d-none')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>