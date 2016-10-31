<template>
    <section class="widgetfooter">
        
        <h5 v-if="caption">Your caption is: {{ caption }}</h5>
        <label>CAPTION TEXT: </label><input v-model="caption" placeholder="add a caption text">
        <br/>
        
        <h6 v-if="credit">Your credit is: {{ credit }}</h6>
        <label>CREDIT TEXT: </label><input v-model="credit" placeholder="add a credit text">

    </section>
</template>

<script>
export default {
    name: 'widgetfooter',
    data () {
        return {
            caption: '',
            credit: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    height: 2em;
    width: calc(100% - 20em);
}
</style>
