<style scoped>
    section .fr-toolbar .fr-command.fr-btn{
      /* knowbly color gray-42 */
      color: #424242 !important;
    }
    section .fr-toolbar .fr-command.fr-btn.fr-active{
        /*Froala blue = Knowbly "cobalt" (#0063CA )*/
      color: #0063CA !important;
    }
    section .fr-toolbar .fr-command.fr-btn.fr-disabled{
        /*Froala gray highlight = Knowbly "gray-EE" (#EEEEEE ))*/
      color: #EEEEEE !important;
    }
</style>
<template>
  <section v-html="content" class="froala-editor-container">
  </section>
</template>

<script>
import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/froala_editor.min.css"
import "froala-editor/css/plugins/colors.min.css"
import "froala-editor/css/plugins/image.min.css"
import "froala-editor/css/plugins/image_manager.min.css"
import "font-awesome/css/font-awesome.min.css"

import "jquery"

import "froala-editor/js/froala_editor.min.js"
import "froala-editor/js/plugins/colors.min.js"
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/js/plugins/image_manager.min.js"
import "froala-editor/js/plugins/align.min.js"
import "froala-editor/js/plugins/link.min.js"
import "froala-editor/js/plugins/lists.min.js"

export default {
  name: 'Froala-Editor',
  props:['content'],
  // data () {
  //   return {
  //   }
  // },
  // props: ['size', 'myMessage'],
  methods: {
    clicked: function(){
      console.log('clicked', this)
    }
  },
  mounted: function(){
    $.FroalaEditor.DEFAULTS.key= "VZSZGUSXYSMZe1JGZ==";
    console.log('args', arguments, this.$el)
    let $el = $(this.$el);
    let self = this;
    /*$el.on('froalaEditor.initialized',  (e, editor) => this.vm.$editor = editor );
    $el.on('froalaEditor.focus',        (e, editor) => editor.$box.addClass('focus') );
    $el.on('froalaEditor.blur',         (e, editor) => editor.$box.removeClass('focus') );
    $el.on('froalaEditor.image.error',  (e, editor, error) => alert(error.message) );*/

    let defaults = {
        toolbarInline: true,
        charCounterCount: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        initOnClick: true,
        typingTimer: 999,
    }
    // let options = {};

    // if (binding.value.model){
    //     $el.html(binding.value.model)
    // }

    // let editorType = binding.value.type || 'default'
    
    // $.extend(options, defaults, opts[editorType],{
    //     placeholderText: binding.value.placeholder || ''
    //     // fileUploadURL: binding.value.uploadPath || '',
    //     // imageUploadURL: binding.value.uploadPath || ''
    // })

    // console.log('binding', binding)
    // console.log('options', options)


    // console.log(vnode.tag);
    // console.log('el',$el, $el.html());
    setTimeout(() => { 
        $el.froalaEditor(defaults) 
            //  $('body').on('blur', $('#froala'), function(el, el2){
            //  console.log('blur', el, this)
          //  // binding.value.model = $el.html()
        // })
    }, 200);

    $el.on('froalaEditor.blur', 
        (event, ui, el)=>{
            console.log('blur froala', this)
            // this.content = $el.html()
            this.$emit('blur', event, ui, $el.html())
    })

    $el.on('froalaEditor.contentChanged', function (e, editor) {
      // Do something here.
      console.log('contentchanged')
      self.$emit('changed', e, editor, $el.html())

    });

    $el.on('froalaEditor.focus', function (e, editor) {
      // Do something here.
      console.log('focus')
      self.$emit('focus', e, editor)

    });
  }
}
// module.exports = froala
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

