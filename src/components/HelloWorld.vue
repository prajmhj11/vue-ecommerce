<template>
  <div class="hello">
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
</template>

<script>
import $ from 'jquery';
export default {
  name: 'HelloWorld',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
