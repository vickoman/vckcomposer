<template>
    <section class="widgetheader">
        
        <h1 v-if="title">Your title is: {{ title }}</h1>
        <label>TITLE TEXT: </label><input v-model="title" placeholder="add a title">
        
        <h2 v-if="leadin">Your leadin is: {{ leadin }}</h2>
        <label>LEADIN TEXT: </label><input v-model="leadin" placeholder="add a leadin text">
        
    </section>
</template>

<script>
export default {
    name: 'widgetheader',
    data () {
        return {
            title: '',
            leadin: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
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
