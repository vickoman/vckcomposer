<template>
    <section class="widgetcontent">
        
        <p v-if="content">Widget Content: {{ content }}</p>
        <label>WIDGET CONTENT: </label><textarea v-model="content" placeholder="add a title"></textarea>
        pepe
    </section>
</template>




<script>

export default {
    name: 'widgetcontent',
    data () {
        return {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum egestas ipsum nec malesuada. Aliquam sagittis leo et diam ultricies, sit amet tincidunt tortor placerat. Integer malesuada nibh volutpat, faucibus ipsum a, blandit orci. Nulla facilisi. Cras egestas leo in imperdiet aliquet. Suspendisse ultricies pharetra cursus. Vestibulum felis leo, porttitor dictum tempor a, consequat ac augue. Aliquam a viverra ex, nec interdum neque. Vestibulum imperdiet dolor nisl, quis suscipit sapien ultricies id. Ut pulvinar erat turpis, id blandit felis sodales nec. Aliquam scelerisque tempus dui, at tincidunt enim facilisis nec. Proin orci augue, commodo sed dignissim non, pretium sed nisi. Vestibulum vulputate sem at lacus imperdiet lacinia. Fusce eu felis vitae eros semper egestas sit amet nec diam. Maecenas commodo massa nec eros suscipit hendrerit. Praesent euismod convallis urna quis facilisis.'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
textarea{
    height: 4em;
    width: calc(100% - 10em);
}
</style>
