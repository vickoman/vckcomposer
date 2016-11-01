<template>
    <section class="widgetcontent">
        <label>WIDGET CONTENT: </label>
        <froala @froalachanged="froalachanged" :content="content" placeholder="Enter content" editor-type="widget" group="widget"></froala>
        <!-- <froala @blur="froalaBlur" placeholder="Enter content" @focus="froalaFocus" @changed="changed" content="" group="widget"></froala> -->
        <!-- <p v-if="content" v-froala="{type:'widget', uploadPath: 'pepe', model: content, placeholder: 'Enter text Here!'}">Widget Content: {{ content }}</p> -->
        
    </section>
</template>




<script>
import Froala from './Froala'

export default {
    name: 'widgetcontent',
    data () {
        return {
            content: '<h4>Testing</h4>',//'<h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4> <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5> <hr> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula nibh vehicula interdum fermentum. </p><img class="fr-dib fr-draggable" src="http://www.thetradiewebsite.com/wp-content/uploads/2013/10/img-6.jpg"> <p> Curabitur sagittis in lorem ac molestie. Suspendisse quis tempor risus. Sed cursus semper odio, et efficitur dui lacinia vel. Aenean pulvinar, tellus eget efficitur tincidunt, elit lorem elementum purus, id blandit enim orci iaculis turpis. Maecenas in libero quis arcu faucibus hendrerit. Maecenas viverra, ex vitae aliquet elementum, tellus est porttitor massa, in pulvinar augue massa sit amet nunc. Donec suscipit fringilla aliquam. Maecenas malesuada iaculis odio, non luctus magna dignissim eu. Nunc non accumsan urna. Vestibulum eu metus molestie, tincidunt est eget, tincidunt lorem. Donec eu augue porta, finibus magna quis, porttitor arcu. Etiam efficitur ligula justo, vitae molestie tellus feugiat non. In commodo dui ac lacus tempus, in porttitor tortor suscipit. Suspendisse aliquet velit nec imperdiet scelerisque. Aliquam viverra quis dolor id mollis. </p>',
            activeFroala: null,
        }
    },
    components:{
        Froala
    },
    methods:{
        froalachanged: function(event, editor, group){
            // this.content = content
            console.log('changed parent', this)
            // this.$emit('froalachanged', editor, group)
        },
    },
    // mounted: function () {
    //     this.$on('froalachanged', function (editor, group) {
    //     console.log('froalachanged', editor, group)
    //     })
    //     this.$on('changed', function (editor, group) {
    //     console.log('froalachanged', editor, group)
    //     })
    // },
    // events: {
    //     froalachanged: function (argument) {
    //     console.log('froalachanged', editor, group)
    //     // logic
    //     },
    //     changed: function (argument) {
    //     console.log('froalachanged', editor, group)
    //     // logic
    //     },

    // },
   
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
