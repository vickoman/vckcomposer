<template>
    <section class="widgetheader">
        
        <h1 v-if="title">Your title is: {{ title }}</h1>
        <label>TITLE TEXT: </label><input v-model="title" placeholder="add a title">
        <br/>
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
input{
    height: 2em;
    width: calc(100% - 20em);
}
</style>
