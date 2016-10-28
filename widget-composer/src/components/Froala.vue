<template>
  <section class="froala-editor-container" v-on:click="clicked">
     {{msg}}
  </section>
</template>

<script>
import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/froala_editor.min.css"
import "froala-editor/css/plugins/colors.min.css"
import "froala-editor/css/plugins/image.min.css"
import "froala-editor/css/plugins/image_manager.min.css"
import "font-awesome/css/font-awesome.min.css"

import "froala-editor/js/froala_editor.min.js"

export default {
  name: 'Froala-Editor',
  data () {
    return {
      msg: 'pepe1'
    }
  },
  props: ['size', 'myMessage'],
  methods: {
    clicked: function(){
      console.log('clicked', this)
    }
  },
  mounted: function(){
    $.FroalaEditor.DEFAULTS.key= "VZSZGUSXYSMZe1JGZ==";
    console.log('args', arguments, this.$el)
    let $el = $(this.$el);
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
            this.$emit('froalaBlur', event, ui, $el)
    })
  }
}

// froala = {
//     // params: ['upload-path', 'type'],
//     // twoWay: true,
    // bind: function(el, binding, vnode) {
    //     $.FroalaEditor.DEFAULTS.key= "VZSZGUSXYSMZe1JGZ==";
    //     var $el = $(el);
    //     /*$el.on('froalaEditor.initialized',  (e, editor) => this.vm.$editor = editor );
    //     $el.on('froalaEditor.focus',        (e, editor) => editor.$box.addClass('focus') );
    //     $el.on('froalaEditor.blur',         (e, editor) => editor.$box.removeClass('focus') );
    //     $el.on('froalaEditor.image.error',  (e, editor, error) => alert(error.message) );*/

    //     let defaults = {
    //         toolbarInline: true,
    //         charCounterCount: true,
    //         toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
    //         initOnClick: true,
    //         typingTimer: 999,
    //     }
    //     let options = {};

    //     if (binding.value.model){
    //         $el.html(binding.value.model)
    //     }

    //     let editorType = binding.value.type || 'default'
        
    //     $.extend(options, defaults, opts[editorType],{
    //         placeholderText: binding.value.placeholder || ''
    //         // fileUploadURL: binding.value.uploadPath || '',
    //         // imageUploadURL: binding.value.uploadPath || ''
    //     })

    //     console.log('binding', binding)
    //     console.log('options', options)


    //     // console.log(vnode.tag);
    //     // console.log('el',$el, $el.html());
    //     setTimeout(() => { 
    //         $el.froalaEditor(options) 
    //             //  $('body').on('blur', $('#froala'), function(el, el2){
    //             //  console.log('blur', el, this)
    //           //  // binding.value.model = $el.html()
    //         // })
    //     }, 200);

        
//         $el.on('froalaEditor.blur', 
//         ()=>{
//             console.log('blur froala', this, binding)
//             vm.$emit('blur', event, ui, $el)
//         })

//     },
//     unbind: function () {
//         // don't forget to teardown listeners and stuff.
//         $(this.el).off().froalaEditor('destroy')
//     },
//     update: (el, binding, vnode) => {
//         console.log('update', el, binding, vnode)
//         $(el).html(binding.value.model)
//     }
// }

// module.exports = froala
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
