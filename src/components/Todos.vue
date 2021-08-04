<template lang="">
    <div >
        <h1>Todos List</h1>
        <div class="todos">
            <div @dblclick='toggleCompleted(todo)'  v-for="(todo, index) in allTodos" :key="index" class="todo"
            v-bind:class="{'is-complete': todo.completed}"
            >  
            <!-- Add a new class if the value of todo.completed is true, with which it will change the color of that todo -->
                {{todo.title}}
              <span @click='deleteTodo(todo.id)' class="material-icons trash">delete</span>
            </div>
        </div>
    </div>
</template>
<script>
// Because we want to use the store state, we have 
// to import something called mapgetters
// Use mapactions to call actions, you get the point
import {mapGetters, mapActions} from 'vuex'


export default {
    name:'Todos',
    methods:{
        ...mapActions(['fetchTodos','deleteTodo','updateTodo']),  // Use spread operator to map the fetchTodos
        toggleCompleted(todo){
            console.log(todo.id)
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed : !todo.completed
            }

            // Invoke updateTodo action from our todo module
            this.updateTodo(updTodo)
        },
    },
    // we use mapgetters within the computed property
    // different type of assigning mapgetters
    computed: mapGetters(['allTodos']), 

    // use created method lifecycle to call in the fetchtodos when the component was first created
    created(){
        this.fetchTodos()
    }
}
</script>
<style scoped>

.todos{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
}
.todo{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    max-width: 430px;
    max-height: 70px;
    flex-wrap: wrap;
    word-wrap: break-word;
    overflow: hidden;
}
.trash{
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    color: #fafafa;
}
.trash:active{
    transform: scale(1.3);
}
.trash:hover{
    color: rgb(168, 49, 49);
}
.is-complete{
    background: gray;
    color: white;
}
</style>