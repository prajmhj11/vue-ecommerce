<template>
  <div class="todo text-center">
    <h1>Todo App</h1>
    <input @keyup.enter="add" type="text" v-model="title" placeholder="What you want to do?">
    <button @click="add">Add to List</button>

    <ul class=" list-group">
        <li v-for="(todo,index) in todos" v-bind:key="index">
            {{todo}}
            <span @click="remove(index)"><i class="fas fa-times-circle text-danger"></i></span>    
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "todo",
    props: {
        msg: String
    },
    data(){
        return{
            title: '',
            todos: [
                'Go to shop'
            ],
        }
    },
    methods:{
        add(){
            if(this.title != ''){
                this.todos.unshift(this.title);
                this.title = '';
                console.log(this.todos);
            }
        },
        remove(index){
            // this.todos.splice(index, 1)
            this.$delete(this.todos, index)
        }
    },
    created: ()=>{
        console.log(window.location);
    }
}
</script>