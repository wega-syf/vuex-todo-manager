<template lang="">
    <div >
        <h1>Todos Component</h1>
        <div class="todos">
            <div  v-for="(todo, index) in allTodos" :key="index" class="todo">
                {{todo.title}}
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
        ...mapActions(['fetchTodos'])  // Use spread operator to map the fetchTodos
    },
    // we use mapgetters within the computed property
    computed: {
        ...mapGetters(['allTodos'])
    }, 

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
}
</style>