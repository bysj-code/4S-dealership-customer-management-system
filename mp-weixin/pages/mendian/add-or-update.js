(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mendian/add-or-update"],{"5e82":function(e,n,t){"use strict";var r=t("7df7"),i=t.n(r);i.a},"6f8e":function(e,n,t){"use strict";t.r(n);var r=t("b964"),i=t("8a3c");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("5e82");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"f65d8fea",null,!1,r["a"],u);n["default"]=s.exports},"7df7":function(e,n,t){},"8a3c":function(e,n,t){"use strict";t.r(n);var r=t("c999"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},b964:function(e,n,t){"use strict";var r,i=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}))},c999:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("fd82"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{mendianzhanghao:"",mima:"",mendianmingcheng:"",fuzeren:"",shouji:"",youxiang:"",mendianzhaopian:"",beizhu:"",sfsh:"",shhf:""},user:{},ro:{mendianzhanghao:!1,mima:!1,mendianmingcheng:!1,fuzeren:!1,shouji:!1,youxiang:!1,mendianzhaopian:!1,beizhu:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(r.default.mark((function n(t){var i,a,u,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.getStorageSync("nowTable"),n.next=3,this.$api.session(i);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=13;break}return this.ruleForm.id=t.id,n.next=11,this.$api.info("mendian",this.ruleForm.id);case 11:a=n.sent,this.ruleForm=a.data;case 13:if(!t.cross){n.next=52;break}u=e.getStorageSync("crossObj"),n.t0=r.default.keys(u);case 16:if((n.t1=n.t0()).done){n.next=52;break}if(o=n.t1.value,"mendianzhanghao"!=o){n.next=22;break}return this.ruleForm.mendianzhanghao=u[o],this.ro.mendianzhanghao=!0,n.abrupt("continue",16);case 22:if("mima"!=o){n.next=26;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",16);case 26:if("mendianmingcheng"!=o){n.next=30;break}return this.ruleForm.mendianmingcheng=u[o],this.ro.mendianmingcheng=!0,n.abrupt("continue",16);case 30:if("fuzeren"!=o){n.next=34;break}return this.ruleForm.fuzeren=u[o],this.ro.fuzeren=!0,n.abrupt("continue",16);case 34:if("shouji"!=o){n.next=38;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,n.abrupt("continue",16);case 38:if("youxiang"!=o){n.next=42;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,n.abrupt("continue",16);case 42:if("mendianzhaopian"!=o){n.next=46;break}return this.ruleForm.mendianzhaopian=u[o],this.ro.mendianzhaopian=!0,n.abrupt("continue",16);case 46:if("beizhu"!=o){n.next=50;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,n.abrupt("continue",16);case 50:n.next=16;break;case 52:this.styleChange();case 53:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},mendianzhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.mendianzhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.mendianzhanghao){e.next=3;break}return this.$utils.msg("门店账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=9;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("mendian",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("mendian",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},d4c1:function(e,n,t){"use strict";(function(e){t("9981"),t("921b");r(t("66fd"));var n=r(t("6f8e"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["d4c1","common/runtime","common/vendor"]]]);