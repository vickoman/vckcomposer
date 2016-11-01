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

const opts = {
    widget: {
        toolbarButtons:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        toolbarButtonsSM:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink']
    },
    default: {
        toolbarButtonsSM:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        toolbarButtons:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink']
    },
    headerFooter: {
        toolbarButtons:   ['bold', 'italic', 'underline', 'strikeThrough', 'color',],
        toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'color',],
        toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'color',],
    }
}

export default {
  name: 'Froala-Editor',
  props:['content', 'placeholder', 'editorType', 'group'],
  methods: {
    clicked: function(){
      console.log('clicked', this)
    }
  },
  mounted: function(){
    $.FroalaEditor.DEFAULTS.key= "VZSZGUSXYSMZe1JGZ==";
    // console.log('args', arguments, this.$el)
    let $el = $(this.$el);
    let self = this;

    let defaults = {
        toolbarInline: true,
        charCounterCount: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
        initOnClick: true,
        typingTimer: 999,
    }

    let editorType = this.editorType || 'default'
    
    $.extend(defaults, opts[editorType],{
        placeholderText: this.placeholder || '',
    })

    // console.log(vnode.tag);
    // console.log('el',$el, $el.html());
    setTimeout(() => { 
        $el.froalaEditor(defaults) 
    }, 200);

    $el.on('froalaEditor.blur', 
        (event, ui, el)=>{
            console.log('blur froala', this)
            // this.content = $el.html()
            this.$emit('blur', event, ui, $el.html())
    })
    this.group = this.group || 'global'

    $el.on('froalaEditor.contentChanged', function (e, editor) {
      // Do something here.
      console.log('contentchanged',editor, self.group)
      // self.$emit('froalachanged', editor, this.group)

      if (!window.undoPressed && !window.redoPressed) {
          editorUndoOrder[self.group].splice(editorUndoCurrentPosition + 1, editorUndoOrder[self.group].length)
          window.editorUndoOrder[self.group].push(editor)
          window.editorUndoCurrentPosition = window.editorUndoOrder[self.group].length - 1
          console.log('contentchanged', editorUndoOrder[self.group].map(value => value['id']), window.editorUndoCurrentPosition)
          self.$emit('froalachanged', editor, this.group)
      }else
      {
          window.undoPressed = false
          window.redoPressed = false
      }
      // self.$emit('changed', e, editor, $el.html())

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


