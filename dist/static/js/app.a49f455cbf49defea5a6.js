webpackJsonp([1,0],[function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var s=i(6),n=a(s),r=i(44),o=a(r),l=i(42),d=a(l),c=i(18),h=a(c),u=i(43),_=a(u),p=i(45),f=a(p);new n.default({el:"#app",template:"<App/>",components:{App:d.default},router:h.default}),new n.default({el:"#widget",template:"<Widget/>",components:{Widget:o.default}}),new n.default({el:"#panel-settings",template:"<Panelsettings/>",components:{Panelsettings:_.default}}),new n.default({el:"#widget-toolbar",template:"<widgetToolbar/>",components:{WidgetToolbar:f.default}}),e.router=h.default},,function(t,e,i){var a,s;i(34),a=i(11);var n=i(59);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(31),a=i(15);var n=i(56);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-7a0ec5a6",t.exports=a},function(t,e,i){var a,s;i(28),a=i(16);var n=i(53);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-55abae04",t.exports=a},function(t,e,i){var a,s;i(25),a=i(17);var n=i(49);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-1346e620",t.exports=a},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(48),n=a(s);e.default={name:"panelsettings",components:{Settings:n.default}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),n=a(s),r=i(4),o=a(r),l=i(3),d=a(l);e.default={name:"widget",components:{Widgetheader:n.default,Widgetfooter:o.default,Widgetcontent:d.default},created:function(){console.log("mounted"),this.$on("froalachanged",function(t,e){console.log("froalachanged",t,e)}),this.$on("changed",function(t,e){console.log("froalachanged",t,e)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.editorUndoOrder=window.editorUndoOrder||{widget:[]},window.editorUndoCurrentPosition=window.editorUndoCurrentPosition||0,e.default={name:"widgetToolbar",data:function(){return{isActive:!1}},methods:{myFilter:function(){this.isActive=!this.isActive},undo:function(){console.log("before undo",editorUndoOrder.widget.map(function(t){return t.id}),editorUndoCurrentPosition),window.undoPressed=!0,editorUndoOrder.widget[editorUndoCurrentPosition].undo.canDo()&&editorUndoOrder.widget[editorUndoCurrentPosition].undo.run(),editorUndoCurrentPosition&&(editorUndoCurrentPosition-=1),console.log("undo",editorUndoOrder.widget.map(function(t){return t.id}),editorUndoCurrentPosition)},redo:function(){console.log("before redo",editorUndoOrder.widget.map(function(t){return t.id}),editorUndoCurrentPosition),window.redoPressed=!0,editorUndoOrder.widget[editorUndoCurrentPosition].undo.canRedo()&&editorUndoOrder.widget[editorUndoCurrentPosition].undo.redo(),editorUndoCurrentPosition+1<editorUndoOrder.widget.length&&(editorUndoCurrentPosition+=1),console.log("redo",editorUndoOrder.widget.map(function(t){return t.id}),editorUndoCurrentPosition)}}}},function(t,e,i){(function(t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(21),i(20),i(22),i(23),i(24),i(19),i(1),i(35),i(37),i(38),i(39),i(36),i(40),i(41);var a={widget:{toolbarButtons:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"],toolbarButtonsSM:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"]},default:{toolbarButtonsSM:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"],toolbarButtons:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"]},headerFooter:{toolbarButtons:["bold","italic","underline","strikeThrough","color"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","color"],toolbarButtonsSM:["bold","italic","underline","strikeThrough","color"]}};e.default={name:"Froala-Editor",props:["content","placeholder","editorType","group"],methods:{clicked:function(){console.log("clicked",this)}},mounted:function(){var e=this;t.FroalaEditor.DEFAULTS.key="VZSZGUSXYSMZe1JGZ==";var i=t(this.$el),s=this,n={toolbarInline:!0,charCounterCount:!0,toolbarButtons:["bold","italic","underline","strikeThrough","color","align","-","formatUL","formatOL","indent","outdent","insertImage","insertLink"],initOnClick:!0,typingTimer:999},r=this.editorType||"default";t.extend(n,a[r],{placeholderText:this.placeholder||""}),setTimeout(function(){i.froalaEditor(n)},200),i.on("froalaEditor.blur",function(t,a,s){console.log("blur froala",e),e.$emit("blur",t,a,i.html())}),this.group=this.group||"global",i.on("froalaEditor.contentChanged",function(t,e){console.log("contentchanged",e,s.group),window.undoPressed||window.redoPressed?(window.undoPressed=!1,window.redoPressed=!1):(editorUndoOrder[s.group].splice(editorUndoCurrentPosition+1,editorUndoOrder[s.group].length),window.editorUndoOrder[s.group].push(e),window.editorUndoCurrentPosition=window.editorUndoOrder[s.group].length-1,console.log("contentchanged",editorUndoOrder[s.group].map(function(t){return t.id}),window.editorUndoCurrentPosition),s.$emit("froalachanged",e,this.group))}),i.on("froalaEditor.focus",function(t,e){console.log("focus"),s.$emit("focus",t,e)})}}}).call(e,i(1))},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:""}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),n=a(s),r=i(4),o=a(r),l=i(3),d=a(l);e.default={name:"hotpsot",components:{Widgetheader:n.default,Widgetfooter:o.default,Widgetcontent:d.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"settings",data:function(){return{panelTitle:"Settings"}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=a(s);e.default={name:"widgetcontent",data:function(){return{content:"<h4>Testing</h4>",activeFroala:null}},components:{Froala:n.default},methods:{froalachanged:function(t,e,i){console.log("changed parent",this)}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=a(s);e.default={name:"widgetfooter",data:function(){return{caption:"",credit:""}},components:{Froala:n.default}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=a(s);e.default={name:"widgetheader",data:function(){return{title:"",leadin:""}},components:{Froala:n.default}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(6),n=a(s),r=i(60),o=a(r),l=i(47),d=a(l),c=i(46),h=a(c);n.default.use(o.default),e.default=new o.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/widgetEditor/",component:h.default},{path:"/next/",component:d.default},{path:"*",redirect:"/widgetEditor"}]})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,function(t,e,i){var a,s;i(26),a=i(7);var n=i(50);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(27),a=i(8);var n=i(52);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(33),a=i(9);var n=i(58);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(30),a=i(10);var n=i(55);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(32),a=i(12);var n=i(57);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-7b7e6b43",t.exports=a},function(t,e,i){var a,s;a=i(13);var n=i(51);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,e,i){var a,s;i(29),a=i(14);var n=i(54);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-6610f1c2",t.exports=a},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"widgetheader"},[_m(0)," ",_h("froala",{attrs:{group:"widget",content:title,placeholder:"add a title text","editor-type":"headerFooter"}})," ",_m(1)," ",_h("froala",{attrs:{group:"widget",content:leadin,placeholder:"add a leadin text","editor-type":"headerFooter"}})])},staticRenderFns:[function(){with(this)return _h("label",["TITLE TEXT: "])},function(){with(this)return _h("label",["LEADIN TEXT: "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("router-view",{staticClass:"view"})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"widget-editor",attrs:{id:"widgetEditor"}},[_h("header",{staticClass:"header"},[_m(0)," ",_h("router-link",{attrs:{to:"/widgetEditor"}},[_h("svg",[_h("use",{attrs:{"xlink:href":"#close-x"}})])])])," "," ",_h("div",{staticClass:"workspace"},[_h("div",{staticClass:"canvas"},[_h("div",{staticClass:"toolbar-widget"},[_h("ul",[_m(1)," ",_h("li",[_h("div",{staticClass:"cmd-menu-container"},[_h("div",{staticClass:"cmd-menu"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#knife"}})])])," ",_h("div",{staticClass:"mask-cmd-tools"},[_h("div",{staticClass:"cmd-tools"},[_h("ul",[_h("li",[_h("svg",[_h("use",{attrs:{"xlink:href":"#undo"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xlink:href":"#redo"}})])])," ",_h("li",{staticClass:"spacer"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#vert-line"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xlink:href":"#cut"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xlink:href":"#copy"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xlink:href":"#paste"}})])])])])])])])," ",_m(2)])])," ",_h("div",{staticClass:"artboard-container"},[_h("div",{staticClass:"media-tools"},[_h("ul",[_h("li",{},[_h("svg",[_h("use",{attrs:{"xlink:href":"#settings"}})])])," ",_h("li",{},[_h("svg",[_h("use",{attrs:{"xlink:href":"#metadata"}})])])])])," ",_h("div",{staticClass:"artboard"},[_h("div",{attrs:{id:"widget"}},[_h("widgetheader")," ",_h("widgetcontent")," ",_h("widgetfooter")])])])])," "," ",_h("div",{staticClass:"panel"},[_m(3)," ",_h("div",{staticClass:"panel-themes"},[_h("div",{staticClass:"panel-content"},[_m(4)," ",_h("div",{staticClass:"modern-container"},[_h("div",{staticClass:"dropdown dropdown-input"},[_h("div",{staticClass:"dropdown-button"},[_m(5)," ",_h("div",{staticClass:"icon-arrow"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-down"}})])])])," ",_m(6)])])," ",_h("div",{staticClass:"academic-container"},[_h("div",{staticClass:"dropdown dropdown-input"},[_h("div",{staticClass:"dropdown-button"},[_m(7)," ",_h("div",{staticClass:"icon-arrow"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-down"}})])])])," ",_m(8)])])," ",_h("div",{staticClass:"playful-container"},[_h("div",{staticClass:"dropdown dropdown-input"},[_h("div",{staticClass:"dropdown-button"},[_m(9)," ",_h("div",{staticClass:"icon-arrow"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-down"}})])])])," ",_m(10)])])])])," "," ",_h("div",{staticClass:"panel-accessibility"},[_h("div",{staticClass:"panel-content"},[_m(11)," "," ",_h("div",{staticClass:"alt-text-readers-container accordian"},[_h("div",{staticClass:"accordian__btn border-top"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-right"}})])," ",_m(12)])," ",_m(13)])," "," ",_h("div",{staticClass:"alt-text-assets-container accordian"},[_h("div",{staticClass:"accordian__btn"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-right"}})])," ",_m(14)])," ",_m(15)])])])," ",_h("div",{staticClass:"panel-metadata"},[_h("div",{staticClass:"panel-content"},[_m(16)," ",_h("div",{staticClass:"description-container accordian"},[_h("div",{staticClass:"border-top accordian__btn"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-right"}})])," ",_m(17)])," ",_m(18)])," ",_h("div",{staticClass:"rights-sources-container accordian"},[_h("div",{staticClass:"btn-container accordian__btn"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-right"}})])," ",_m(19)])," ",_h("div",{staticClass:"accordian__container panel-closed"},[_h("ul",{staticClass:"accordian__content"},[_m(20)," ",_m(21)," "," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"dropdown dropdown-input"},[_h("div",{staticClass:"dropdown-button"},[_m(22)," ",_h("div",{staticClass:"icon-arrow"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-down"}})])])])," ",_m(23)])])," ",_m(24)," ",_m(25)])])])," ",_h("div",{staticClass:"interactive-profile-container accordian"},[_h("div",{staticClass:"btn-container accordian__btn"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#arrow-right"}})])," ",_m(26)])," ",_m(27)])])])])," "," ",_h("div",{staticClass:"sidebar"},[_h("ul",[_h("li",{staticClass:"btn-settings"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#settings"}})])," ",_m(28)])," ",_h("li",{staticClass:"btn-metadata"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#metadata"}})])," ",_m(29)])," ",_h("li",{staticClass:"btn-accessibility"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#accessibility"}})])," ",_m(30)])," ",_h("li",{staticClass:"btn-comments"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#comments"}})])," ",_m(31)])])," ",_h("ul",[_h("li",{staticClass:"btn-user-guide"},[_h("svg",[_h("use",{attrs:{"xlink:href":"#help-info"}})])," ",_m(32)])])])])," "," ",_m(33)])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"header__title"},["Widget Editor"])},function(){with(this)return _h("li",{staticClass:"widget-title"},[_h("label",{staticClass:"widget-title__label",attrs:{for:""}},["HOTSPOT WIDGET:"])," ",_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}})," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Untitled",value:""}})])])},function(){with(this)return _h("li",{staticClass:"button-preview"},[_h("button",{staticClass:"button-standard-gray"},["Preview"])])},function(){with(this)return _h("div",{staticClass:"panel-settings"},[_h("div",{staticClass:"panel-content"},[_h("div",{staticClass:"panel-header"},["Settings"])," ",_h("ul",[_h("li",{staticClass:"kds-mb-24"},[_h("button",{staticClass:"button-standard-gray"},["Batch Upload"])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"checkbox"}})," ",_h("label",{attrs:{for:"checkbox"}},["Checkbox"])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:""}})," ",_h("label",["On"])])," ",_h("li",[_h("input",{attrs:{type:"radio",value:"Off"}})," ",_h("label",["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-response"},[_h("div",{staticClass:"radio-button-header"},["Response Type"])," ",_h("ul",[_h("li",[_h("div",{staticClass:"radio-container"},[_h("input",{attrs:{type:"radio",value:"On",checked:""}})," ",_h("label",["On"])," ",_h("div",{staticClass:"input-number-container u-hidden"},[_h("div",{staticClass:"input-number-max"},[_h("label",{attrs:{for:""}},["Max attempts"])," ",_h("input",{attrs:{type:"number",min:"1",max:"9",value:"3"}})])])])])," ",_h("li",[_h("div",{staticClass:"radio-container"},[_h("input",{attrs:{type:"radio",value:"Off"}})," ",_h("label",["Off"])," ",_h("div",{staticClass:"input-number-container u-hidden"},[_h("div",{staticClass:"input-number-max"},[_h("label",{attrs:{for:""}},["Max attempts"])," ",_h("input",{attrs:{type:"number",min:"1",max:"9",value:"3"}})])])])])])])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:""}})," ",_h("label",["On"])])," ",_h("li",[_h("input",{attrs:{type:"radio",value:"Off"}})," ",_h("label",["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"checkbox"}})," ",_h("label",{attrs:{for:"checkbox"}},["Checkbox"])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:""}})," ",_h("label",["On"])])," ",_h("li",[_h("input",{attrs:{type:"radio",value:"Off"}})," ",_h("label",["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["Width"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"checkbox"}})," ",_h("label",{attrs:{for:"checkbox"}},["Checkbox"])])])])])])},function(){with(this)return _h("div",{staticClass:"panel-header"},["Themes"])},function(){with(this)return _h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Language"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Language",value:""}})])},function(){with(this)return _h("ul",{staticClass:"dropdown-content u-hide"},[_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])])},function(){with(this)return _h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Language"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Language",value:""}})])},function(){with(this)return _h("ul",{staticClass:"dropdown-content u-hide"},[_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])])},function(){with(this)return _h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Language"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Language",value:""}})])},function(){with(this)return _h("ul",{staticClass:"dropdown-content u-hide"},[_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])])},function(){with(this)return _h("div",{staticClass:"panel-header"},["Accessibility"])},function(){with(this)return _h("div",{staticClass:"accordian__title"},["Alt Text Screen Readers"])},function(){with(this)return _h("div",{staticClass:"accordian__container panel-closed"},[_h("ul",{staticClass:"accordian__content"},[_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Widget Short Description"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Widget Short Description",value:""}})])])," ",_h("li",[_h("div",{staticClass:"textarea-line-container"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txtarea-line"}},["Widget Long Description"])," ",_h("textarea",{staticClass:"textarea-line",attrs:{type:"text",rows:"1",placeholder:"Widget Long Description"}})])])])])},function(){with(this)return _h("div",{staticClass:"accordian__title"},["Alt Text Assets"])},function(){with(this)return _h("div",{staticClass:"accordian__container panel-closed"},[_h("ul",{staticClass:"accordian__content"},[_h("li",{staticClass:"kds-mb-40"},[_h("div",{staticClass:"image-text-input"},[_h("div",{staticClass:"image-lockup"},[_h("div",{staticClass:"image-file-name"},["filename.jpg"])," ",_h("img",{attrs:{src:"https://unsplash.it/300/200",alt:""}})," ",_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Alt Text"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Alt Text",value:""}})])])])])," ",_h("li",{staticClass:"kds-mb-40"},[_h("div",{staticClass:"image-text-input"},[_h("div",{staticClass:"image-lockup"},[_h("div",{staticClass:"image-file-name"},["filename.jpg"])," ",_h("img",{attrs:{src:"https://unsplash.it/300/200",alt:""}})," ",_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Alt Text"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Alt Text",value:""}})])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"image-text-input"},[_h("div",{staticClass:"image-lockup"},[_h("div",{staticClass:"image-file-name"},["filename.jpg"])," ",_h("img",{attrs:{src:"https://unsplash.it/300/200",alt:""}})," ",_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Alt Text"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Alt Text",value:""}})])])])])])])},function(){with(this)return _h("div",{staticClass:"panel-header"},["Metadata"])},function(){with(this)return _h("div",{staticClass:"accordian__title"},["Description"])},function(){with(this)return _h("div",{staticClass:"accordian__container panel-closed"},[_h("ul",{staticClass:"accordian__content"},[_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Subject"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Subject",value:""}})])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"textarea-line-container"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txtarea-line"}},["Description"])," ",_h("textarea",{staticClass:"textarea-line",attrs:{type:"text",rows:"1",placeholder:"Description"}})])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Publisher"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Publisher",value:""}})])])," ",_h("li",[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Contributor"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Contributor",value:""}})])])])])},function(){with(this)return _h("div",{staticClass:"accordian__title"},["Rights & Sources"])},function(){with(this)return _h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Identifier"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Identifier",value:""}})])])},function(){with(this)return _h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"textarea-line-container"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txtarea-line"}},["Source"])," ",_h("textarea",{staticClass:"textarea-line",attrs:{type:"text",rows:"1",placeholder:"Source"}})])])},function(){with(this)return _h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Language"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Language",value:""}})])},function(){with(this)return _h("ul",{staticClass:"dropdown-content u-hide"},[_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])," ",_h("li",["Dropdown Item"])])},function(){with(this)return _h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Coverage"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Coverage",value:""}})])])},function(){with(this)return _h("li",[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Rights"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Rights",value:""}})])])},function(){with(this)return _h("div",{staticClass:"accordian__title"},["Interactive Profile"])},function(){with(this)return _h("div",{staticClass:"accordian__container panel-closed"},[_h("ul",{staticClass:"accordian__content"},[_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Genre"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Genre",value:""}})])])," "," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Alignment"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Alignment",value:""}})])])," ",_h("li",{staticClass:"mb-24"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["End User"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"End User",value:""}})])])," ",_h("li",{staticClass:"mb-24"},[_h("div",{staticClass:"input-time-range"},[_h("label",{attrs:{for:""}},["Time Required"])," ",_h("ul",{staticClass:"time-inputs"},[_h("li",[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["minutes:"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])," ",_h("li",[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["seconds:"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])])])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-age-range"},[_h("label",{attrs:{for:""}},["Age Range"])," ",_h("ul",{staticClass:"age-inputs"},[_h("li",[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["From:"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])," ",_h("li",[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["To:"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])])])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Interactive Type"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Interactive Type",value:""}})])])," ",_h("li",{},[_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}},["Learning Resource Type"])," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Learning Resource Type",value:""}})])])])])},function(){with(this)return _h("div",{staticClass:"indicator indicator--right u-hide"})},function(){with(this)return _h("div",{staticClass:"indicator indicator--right u-hide"})},function(){with(this)return _h("div",{staticClass:"indicator indicator--right u-hide"})},function(){with(this)return _h("div",{staticClass:"indicator indicator--right u-hide"})},function(){with(this)return _h("div",{staticClass:"indicator indicator--right u-hide"})},function(){with(this)return _h("footer",{staticClass:"footer"},["Footer - FPO"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"panelsettings"}},[_h("settings")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"widgetfooter"},[_m(0)," ",_h("froala",{attrs:{content:caption,placeholder:"add a caption text",group:"widget","editor-type":"headerFooter"}})," ",_m(1)," ",_h("froala",{attrs:{content:credit,placeholder:"add a credit text",group:"widget","editor-type":"headerFooter"}})])},staticRenderFns:[function(){with(this)return _h("label",["CAPTION TEXT: "])},function(){with(this)return _h("label",["CREDIT TEXT: "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"panel-content"},[_h("div",{staticClass:"panel-header"},[_s(panelTitle)])," ",_m(0)])},staticRenderFns:[function(){with(this)return _h("ul",[_h("li",{staticClass:"kds-mb-24"},[_h("button",{staticClass:"button-standard-gray"},["Batch Upload"])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"876"}})," ",_h("label",{attrs:{for:"876"}},["Checkbox"])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:"",name:".1oe0n",id:"47"}})," ",_h("label",{attrs:{for:"47"}},["On"])])," ",_h("li",[_h("input",{attrs:{type:"radio",value:"Off",name:".1oe0n",id:"993"}})," ",_h("label",{attrs:{for:"993"}},["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-response"},[_h("div",{staticClass:"radio-button-header"},["Response Type"])," ",_h("ul",[_h("li",[_h("div",{staticClass:"radio-container"},[_h("input",{attrs:{type:"radio",value:"On",checked:"",name:".v1m3s",id:"427"}})," ",_h("label",{attrs:{for:"427"}},["On"])," ",_h("div",{staticClass:"input-number-container u-hidden"},[_h("div",{staticClass:"input-number-max"},[_h("label",{attrs:{for:""}},["Max attempts"])," ",_h("input",{attrs:{type:"number",min:"1",max:"9",value:"3",name:".v1m3s"}})])])])])," ",_h("li",[_h("div",{staticClass:"radio-container"},[_h("input",{attrs:{type:"radio",value:"Off",name:".v1m3s",id:"201"}})," ",_h("label",{attrs:{for:"201"}},["Off"])," ",_h("div",{staticClass:"input-number-container u-hidden"},[_h("div",{staticClass:"input-number-max"},[_h("label",{attrs:{for:""}},["Max attempts"])," ",_h("input",{attrs:{type:"number",min:"1",max:"9",value:"3",name:".v1m3s"}})])])])])])])])," ",_h("li",{staticClass:"kds-mb-16"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:"",name:".dbpzd",id:"107"}})," ",_h("label",{attrs:{for:"107"}},["On"])])," ",_h("li",[_h("input",{
attrs:{type:"radio",value:"Off",name:".dbpzd",id:"612"}})," ",_h("label",{attrs:{for:"612"}},["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"685"}})," ",_h("label",{attrs:{for:"685"}},["Checkbox"])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"radio-buttons-vertical"},[_h("div",{staticClass:"radio-button-header"},["Header"])," ",_h("ul",[_h("li",[_h("input",{attrs:{type:"radio",value:"On",checked:"",name:".zja7o",id:"538"}})," ",_h("label",{attrs:{for:"538"}},["On"])])," ",_h("li",[_h("input",{attrs:{type:"radio",value:"Off",name:".zja7o",id:"788"}})," ",_h("label",{attrs:{for:"788"}},["Off"])])])])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"input-number"},[_h("label",{attrs:{for:""}},["Width"])," ",_h("input",{attrs:{type:"number",min:"-9999",max:"9999",maxlength:"4",value:"249"}})])])," ",_h("li",{staticClass:"kds-mb-32"},[_h("div",{staticClass:"checkbox"},[_h("input",{attrs:{type:"checkbox",id:"413"}})," ",_h("label",{attrs:{for:"413"}},["Checkbox"])])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"toolbar-widget"},[_h("ul",[_m(0)," ",_h("li",[_h("div",{staticClass:"cmd-menu-container",class:{active:isActive},on:{click:function(t){isActive=!isActive}}},[_h("div",{staticClass:"cmd-menu"},[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#knife"}})])])," ",_h("div",{staticClass:"mask-cmd-tools"},[_h("div",{staticClass:"cmd-tools"},[_h("ul",[_h("li",{on:{click:function(t){t.stopPropagation(),t.preventDefault(),undo(t)}}},[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#undo"}})])])," ",_h("li",{on:{click:function(t){t.stopPropagation(),t.preventDefault(),redo(t)}}},[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#redo"}})])])," ",_h("li",{staticClass:"spacer"},[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#vert-line"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cut"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#copy"}})])])," ",_h("li",[_h("svg",[_h("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#paste"}})])])])])])])])," ",_m(1)])])},staticRenderFns:[function(){with(this)return _h("li",{staticClass:"widget-title"},[_h("label",{staticClass:"widget-title__label",attrs:{for:""}},["HOTSPOT WIDGET:"])," ",_h("div",{staticClass:"input-text"},[_h("label",{staticClass:"u-hidden",attrs:{for:"txt-input"}})," ",_h("input",{staticClass:"txt-input",attrs:{type:"text",name:"",placeholder:"Untitled",value:""}})])])},function(){with(this)return _h("li",{staticClass:"button-preview"},[_h("button",{staticClass:"button-standard-gray"},["Preview"])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"widgetcontent"},[_m(0)," ",_h("froala",{attrs:{content:content,placeholder:"Enter content","editor-type":"widget",group:"widget"},on:{froalachanged:froalachanged}})," "," "])},staticRenderFns:[function(){with(this)return _h("label",["WIDGET CONTENT: "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"widget-editor",attrs:{id:"widgetEditor"}},[_h("header",{staticClass:"header"},[_h("router-link",{attrs:{to:"/next"}},[_m(0)])])," "," ",_m(1)," "," ",_m(2)])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"header__title"},["Widget Editor"])},function(){with(this)return _h("div",{staticClass:"workspace"})},function(){with(this)return _h("footer",{staticClass:"footer"},["Footer - FPO"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"widget"}},[_h("widgetheader")," ",_h("widgetcontent")," ",_h("widgetfooter")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"froala-editor-container",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}}]);
//# sourceMappingURL=app.a49f455cbf49defea5a6.js.map