<template>
    <section class="widgetfooter">
        <label>CAPTION TEXT: </label> <froala :content="caption" placeholder="add a caption text" group="widget" editor-type="headerFooter"></froala>
        <label>CREDIT TEXT: </label> <froala :content="credit"  placeholder="add a credit text"   group="widget" editor-type="headerFooter"></froala>
    </section>
</template>

<script>
import Froala from './Froala'

export default {
    name: 'widgetfooter',
    data () {
        return {
            caption: '',
            credit: ''
        }
    },
    components:{
        Froala
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    height: 2em;
    width: calc(100% - 20em);
}
</style>
