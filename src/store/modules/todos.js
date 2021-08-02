import axios from "axios";

// Create state to store data
const state = {
    todos:[]
}

// Create getters to access data
const getters = {
    allTodos(state) {
        return state.todos 
    },
}

// Create actions 
const actions = {
    // Action to request from jsonplaceholder and call setTodos mutation to change todos state
    async fetchTodos({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(res.data);
        commit('setTodos', res.data)
    },
    // Add a new todo, call a request to jsonplaceholder and call newTodo mutation. Every new todos will have a completed property of false
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, completed:false
        })
        commit('newTodo',response.data)
    }
}

// Create mutations to change state
const mutations = {
    // Change the todos state (finally we can do it)
    setTodos(state,todos) {
        state.todos = todos
    },
    // Add a new todo to the todos state
    // Unshift so the new todo gets put on the top
    newTodo(state, todo){
        state.todos.unshift(todo)
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}