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
                                                <li>
                                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#undo"></use></svg>
                                            </li>
                                            <li>
                                            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redo"></use></svg>
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
// import Widgetheader from './components/Widgetheader'



export default {
  name: 'widgetToolbar',
  
}
console.log('hola toolbar')

// var cmd_menu_container = document.querySelector('.cmd-menu-container');
// var cmd_menu = cmd_menu_container.querySelector('.cmd-menu');
// var cmd_tools = cmd_menu_container.querySelector('.cmd-tools');
// var menu_closed = true;
// cmd_menu.addEventListener('click', function(e){
// if(menu_closed) {
// cmd_tools.classList.add('cmd-tools--open')
// cmd_menu.classList.add('cmd-menu--active')
// menu_closed = false;
// } else {
// cmd_tools.classList.remove('cmd-tools--open')
// cmd_menu.classList.remove('cmd-menu--active')
// menu_closed = true;
// }
// });

 $('.undo').click(()=>{
      console.log('inddooo')
      // console.log('before undo', _(editorUndoOrder).pluck('id'), editorUndoCurrentPosition)
      // // editorUndoCurrentPosition = editorUndoCurrentPosition - 1
      // window.undoPressed = true
      // if (editorUndoOrder[editorUndoCurrentPosition].undo.canDo()){
      //     editorUndoOrder[editorUndoCurrentPosition].undo.run()
      // }
      // if (editorUndoCurrentPosition){
      //     editorUndoCurrentPosition = editorUndoCurrentPosition - 1
      // }
      // // // if (editorUndoOrder.length) 
      // // editorUndoOrder.splice(editorUndoOrder.length - 1, 1)
      // console.log('undo', _(editorUndoOrder).pluck('id'), editorUndoCurrentPosition) 

})
</script>

<style>
body .cmd-tools{
  right: 0px;
}
</style>
