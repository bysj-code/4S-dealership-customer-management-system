(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3285:function(n,t,e){"use strict";e.r(t);var i=e("6263"),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},"4fd8":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-26d947d6]{padding:0 %?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-26d947d6]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20201207/2375faee8a884b19b37041784a37303d.jpg);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-26d947d6]{text-align:center}.logo uni-image[data-v-26d947d6]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-26d947d6]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-26d947d6]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-26d947d6]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-26d947d6]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-26d947d6]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-26d947d6]{margin:0;color:#b49950}',""]),n.exports=t},6263:function(n,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var o=i(e("3b8d")),r=i(e("2971")),a={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","yonghu","mendian"],index:0}},onLoad:function(){var n=["请选择登录用户类型"],t=r.default.list();this.menuList=t;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&n.push(this.menuList[e].roleName);this.options=n,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){uni.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=(0,o.default)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.optionsValues[this.index]){n.next=3;break}return this.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return t=n.sent,uni.setStorageSync("token",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),n.next=11,this.$api.session("".concat(this.optionsValues[this.index]));case 11:t=n.sent,uni.setStorageSync("userid",t.data.id),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 15:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value}}};t.default=a},a86a:function(n,t,e){"use strict";e.r(t);var i=e("f43c"),o=e("3285");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("cf18");var a,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"26d947d6",null,!1,i["a"],a);t["default"]=c.exports},cf18:function(n,t,e){"use strict";var i=e("e3aa"),o=e.n(i);o.a},e3aa:function(n,t,e){var i=e("4fd8");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("74c31ff6",i,!0,{sourceMap:!1,shadowMode:!1})},f43c:function(n,t,e){"use strict";var i,o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{style:{boxShadow:"0 0 0px #59f43e",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20210103/77a3c7239d224ba09aed4120a29fb40c.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20210103/77a3c7239d224ba09aed4120a29fb40c.jpg",mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(0, 204, 0, 1)",backgroundColor:"#fff",borderRadius:"100rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:n.username,callback:function(t){n.username=t},expression:"username"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(0, 204, 0, 1)",backgroundColor:"#fff",borderRadius:"100rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-picker",{attrs:{value:n.index,range:n.options},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.optionsChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-picker-type",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"rgba(0, 102, 204, 1)",textAlign:"left"}},[n._v(n._s(n.options[n.index]))])],1)],1),e("v-uni-view",[e("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(51, 204, 51, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onLoginTap.apply(void 0,arguments)}}},[n._v("登录")])],1),e("v-uni-view",{staticClass:"links"},[e("v-uni-view",{staticClass:"link-highlight",style:{color:"rgba(0, 204, 0, 1)",fontSize:"26rpx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onRegisterTap("yonghu")}}},[n._v("注册用户")]),e("v-uni-view",[n._v("|")]),e("v-uni-view",{staticClass:"link-highlight",style:{color:"rgba(0, 204, 0, 1)",fontSize:"26rpx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onRegisterTap("mendian")}}},[n._v("注册门店")]),e("v-uni-view",[n._v("|")]),e("v-uni-view",{style:{color:"rgba(255, 69, 0, 1)",fontSize:"26rpx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onForgetTap.apply(void 0,arguments)}}},[n._v("忘记密码？")])],1)],1)},r=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}))}}]);