// require('froala.css')

// var $ require('jquery')

// $.FroalaEditor.DEFAULTS.key= "VZSZGUSXYSMZe1JGZ==";
// $(function() {
//     // $('div#froala').froalaEditor({
//     //     toolbarInline: true,
//     //     charCounterCount: true,
//     //     //'insertImage', 'insertLink', 'insertFile', 'insertVideo',
//     //     toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink']
//     // })
//     const opts = {
//         widget: {
//             toolbarInline: true,
//             charCounterCount: true,
//             toolbarButtons:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
//             toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
//             toolbarButtonsSM:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink']
//         },
//         default: {
//             toolbarInline: true,
//             charCounterCount: true,
//             toolbarButtonsSM:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
//             toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
//             toolbarButtons:   ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink']
//         },
//         headerFooter: {
//             toolbarButtons: ['bold', 'italic', 'underline', '|', 'insertLink', '|', 'undo', 'redo', 'clearFormatting', '|', 'html'],
//             toolbarButtonsMD: ['bold', 'italic', 'underline', '|', 'insertLink', '|', 'undo', 'redo', 'clearFormatting', '|', 'html'],
//             height: 200
//         }
//     }
    

//     Vue.directive('froala', {
//     // params: ['upload-path', 'type'],
//     // twoWay: true,
//     bind: function(el, binding, vnode) {
//         let $el = $(el);
//         /*$el.on('froalaEditor.initialized',  (e, editor) => this.vm.$editor = editor );
//         $el.on('froalaEditor.focus',        (e, editor) => editor.$box.addClass('focus') );
//         $el.on('froalaEditor.blur',         (e, editor) => editor.$box.removeClass('focus') );
//         $el.on('froalaEditor.image.error',  (e, editor, error) => alert(error.message) );*/
        

//         let defaults = {
//             toolbarInline: true,
//             charCounterCount: true,
//             toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'align','-', 'formatUL', 'formatOL', 'indent', 'outdent', 'insertImage', 'insertLink'],
//             initOnClick: true,
//             typingTimer: 999,
//         }
//         let options = {};

//         if (binding.value.model){
//             $el.html(binding.value.model)
//         }

//         let editorType = binding.value.type || 'default'
        
//         $.extend(options, defaults, opts[editorType],{
//             placeholderText: binding.value.placeholder || ''
//             // fileUploadURL: binding.value.uploadPath || '',
//             // imageUploadURL: binding.value.uploadPath || ''
//         })

//         console.log('binding', binding)


//         console.log(vnode.tag);
//         console.log('el',$el, $el.html());
//         setTimeout(() => { 
//             $el.froalaEditor(options) 
//                 //  $('body').on('blur', $('#froala'), function(el, el2){
//                 //  console.log('blur', el, this)
//             	//  // binding.value.model = $el.html()
//             // })
//         }, 200);

    
        
//     },
//     unbind: function () {
//         // don't forget to teardown listeners and stuff.
//         $(this.el).off().froalaEditor('destroy')
//     },
//     update: (el, binding, vnode) => {
//         console.log('update', el, binding, vnode)
//         $(el).html(binding.value.model)
//     }
//     })

//     window.app = new Vue({
//     el: '#app',
//         data: {
//             message: 'Hello Vue!',
//             model: '<h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4> <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5> <hr> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula nibh vehicula interdum fermentum. Donec eros enim, pulvinar at libero bibendum, ullamcorper posuere mauris. Quisque quis commodo neque. Fusce pulvinar in magna ut varius. Proin nibh tellus, gravida in varius at, ultricies in dolor. Aliquam rutrum metus augue, nec pharetra nisi tincidunt vel. Morbi dolor enim, fringilla in eros at, tristique posuere dui. Etiam pulvinar odio et dictum sodales. Integer volutpat, lacus sit amet scelerisque pellentesque, lacus ante sagittis purus, eu posuere erat sem eget dolor. Duis rhoncus ac ante eu vehicula. Nam vulputate nibh at arcu euismod suscipit. Nulla eu risus nisi. Suspendisse pharetra convallis odio vitae malesuada. Nulla commodo volutpat ante nec gravida. </p><img class="fr-dib fr-draggable" src="http://www.thetradiewebsite.com/wp-content/uploads/2013/10/img-6.jpg"> <p> Curabitur sagittis in lorem ac molestie. Suspendisse quis tempor risus. Sed cursus semper odio, et efficitur dui lacinia vel. Aenean pulvinar, tellus eget efficitur tincidunt, elit lorem elementum purus, id blandit enim orci iaculis turpis. Maecenas in libero quis arcu faucibus hendrerit. Maecenas viverra, ex vitae aliquet elementum, tellus est porttitor massa, in pulvinar augue massa sit amet nunc. Donec suscipit fringilla aliquam. Maecenas malesuada iaculis odio, non luctus magna dignissim eu. Nunc non accumsan urna. Vestibulum eu metus molestie, tincidunt est eget, tincidunt lorem. Donec eu augue porta, finibus magna quis, porttitor arcu. Etiam efficitur ligula justo, vitae molestie tellus feugiat non. In commodo dui ac lacus tempus, in porttitor tortor suscipit. Suspendisse aliquet velit nec imperdiet scelerisque. Aliquam viverra quis dolor id mollis. </p>'
//             // froalaOptions: {toolbar:'widget'}
//         }
//     });
// });