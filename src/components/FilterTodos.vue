<template lang="">
    <div>
        <h3> Filter todos:</h3>
        <!-- pass the change using $event parameter -->
        <select v-model.number="selected" @change="filterTodos(selected)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    name:'FilterTodos',
    data() {
        return {
            selected :''
        }
    },
    methods: {
        ...mapActions(['filterTodos']),
    },
}
</script>
<style lang="">
    
</style>