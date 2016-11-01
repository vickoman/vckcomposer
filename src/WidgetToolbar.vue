<template>
<div class="toolbar-widget">
  <ul>
    <li class="widget-title">
    <label class="widget-title__label" for="">HOTSPOT WIDGET:</label>
    <div class="input-text">
    <label class="u-hidden" for="txt-input"></label>
    <input type="text" name="" class="txt-input" placeholder="Untitled" value="">
    </div>
    </li>
    <li>
    <div class="cmd-menu-container">
    <div class="cmd-menu">
    <svg>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#knife"></use>
    </svg>
    </div>
    <div class="mask-cmd-tools">
    <div class="cmd-tools">
    <ul>
    <li v-on:click="undo">
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#undo" ></use></svg>
    </li>
    <li v-on:click="redo">
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redo" ></use></svg>
    </li>
    <li class="spacer">
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vert-line"></use></svg>
    </li>
    <li>
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cut"></use></svg>
    </li>
    <li>
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#copy"></use></svg>
    </li>
    <li>
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#paste"></use></svg>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </li>
    <li class="button-preview">
    <button class="button-standard-gray">Preview</button>
    </li>
  </ul>
</div>
</template>

<script>
window.editorUndoOrder = window.editorUndoOrder || {widget:[]}
window.editorUndoCurrentPosition = window.editorUndoCurrentPosition || 0
export default {
  name: 'widgetToolbar',
  methods:{
    undo: function(){
      console.log('before undo', editorUndoOrder.widget.map(value => value['id']), editorUndoCurrentPosition)
      window.undoPressed = true
      if (editorUndoOrder.widget[editorUndoCurrentPosition].undo.canDo()){
          editorUndoOrder.widget[editorUndoCurrentPosition].undo.run()
      }
      if (editorUndoCurrentPosition){
          editorUndoCurrentPosition = editorUndoCurrentPosition - 1
      }
      console.log('undo', editorUndoOrder.widget.map(value => value['id']), editorUndoCurrentPosition) 
    },
    redo: function(){
      console.log('before redo', editorUndoOrder.widget.map(value => value['id']), editorUndoCurrentPosition)
      window.redoPressed = true
      if (editorUndoOrder.widget[editorUndoCurrentPosition].undo.canRedo()){
          editorUndoOrder.widget[editorUndoCurrentPosition].undo.redo()
      }
      if (editorUndoCurrentPosition + 1 < editorUndoOrder.widget.length){
          editorUndoCurrentPosition = editorUndoCurrentPosition + 1
      }
      console.log('redo', editorUndoOrder.widget.map(value => value['id']), editorUndoCurrentPosition) 
    }
  },
  // mounted: function () {
  //   this.$on('froalachanged', function (editor, group) {
  //     console.log('froalachanged', editor, group)
  //   })
  //   this.$on('changed', function (editor, group) {
  //     console.log('froalachanged', editor, group)
  //   })
  // }
}

</script>

<style>
body .cmd-tools{
  right: 0px;
}
</style>
