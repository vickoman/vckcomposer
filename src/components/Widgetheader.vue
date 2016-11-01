<template>
    <section class="widgetheader">
      <label>TITLE TEXT: </label> <froala :content="title" placeholder="add a title text" editor-type="headerFooter"></froala>
        <label>LEADIN TEXT: </label> <froala :content="leadin"  placeholder="add a leadin text"  editor-type="headerFooter"></froala>
    </section>
</template>

<script>
import Froala from './Froala'
export default {
    name: 'widgetheader',
    data () {
        return {
            title: '',
            leadin: ''
        }
    },
    components:{
        Froala
    },
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
