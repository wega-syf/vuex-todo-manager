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
        console.log(response);
        commit('newTodo',response.data)
    },
    async deleteTodo({commit}, id){
        // Request a delete method to the API
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log(response);
        commit('removeTodo', id)
    },
    // Request a limit query to only show a limited set of Todos
    async filterTodos({commit},e){
        console.log(e);
        const limit = parseInt(e)
        // Get selected number
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`)

        commit('setTodos',response.data)
    },
    // Request a PUT request to change the completed todo property
    async updateTodo( {commit},updTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
        console.log(response.data);

        commit('updateTodo', response.data)
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
    removeTodo(state, id) {
        console.log(state.todos, id);
        let ind = 0
        // Find a spesific todo with that id
        for (let todo in state.todos){
            if (todo.id === id) ind = state.todos.indexOf(todo)
        }
        state.todos.splice(ind,1)
    },
    updateTodo(state, updTodo){
        // ANOTHER WAY OF FINDING A SPESIFIC TODO INDEX USING id
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if (index !== -1){
            // replace the current todo with a new updated one on the same position
            state.todos.splice(index,1,updTodo)
        }
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}