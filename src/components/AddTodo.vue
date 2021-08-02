<template >
    <div>
        <h3>
            Add Todo
        </h3>
        <div class="add">
            <form  @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Type your todo task here...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>

// Import mapActions because we want to add new task from this component
import {mapActions} from 'vuex'

export default {
    name:'AddTodo',
    data() {
        return {
            title:''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(event){
            event.preventDefault();
            // Pass in the title data into the addTodo actions from our Vuex store
            this.addTodo(this.title)
        }
    }
}
</script>
<style scoped>
form{
    display: flex;
}
input[type='text']{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type='submit']{
    flex: 2;
    background: #41b883;
    color: #fafafa;
    border: 2px #41b883 solid;
    cursor: pointer;
}
input[type='submit']:active{
    transform: scale(0.95);
    transition: ease;
}
</style>