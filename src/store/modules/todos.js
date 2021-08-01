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
    // Add a new todo 
}

// Create mutations to change state
const mutations = {
    // Change the todos state (finally we can do it)
    setTodos(state,todos) {
        state.todos = todos
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}