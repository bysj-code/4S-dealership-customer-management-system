(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chezhan/add-or-update"],{2559:function(e,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"69bf"))}},a=function(){var e=this,n=e.$createElement;e._self._c},r=[]},a98a:function(e,n,i){"use strict";(function(e){i("de77");t(i("66fd"));var n=t(i("d709"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},c4fd:function(e,n,i){"use strict";i.r(n);var t=i("e278"),a=i.n(t);for(var r in t)"default"!==r&&function(e){i.d(n,e,(function(){return t[e]}))}(r);n["default"]=a.a},d709:function(e,n,i){"use strict";i.r(n);var t=i("2559"),a=i("c4fd");for(var r in a)"default"!==r&&function(e){i.d(n,e,(function(){return a[e]}))}(r);i("dc30");var u,c=i("f0c5"),o=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,"bd4f125e",null,!1,t["a"],u);n["default"]=o.exports},dc30:function(e,n,i){"use strict";var t=i("dddc"),a=i.n(t);a.a},dddc:function(e,n,i){},e278:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(i("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,i,t,a,r,u){try{var c=e[r](u),o=c.value}catch(s){return void i(s)}c.done?n(o):Promise.resolve(o).then(t,a)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,a){var u=e.apply(n,i);function c(e){r(u,t,a,c,o,"next",e)}function o(e){r(u,t,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("69bf"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{mendianzhanghao:"",mendianmingcheng:"",qichemingcheng:"",qichefenlei:"",qichepinpai:"",qicheyanse:"",qichetupian:"",tianchuang:"",huandangfangshi:"",zuowei:"",qichepailiang:"",shangshinianfen:"",shuliang:"",qichexiangqing:"",clicktime:"",clicknum:"",userid:""},qichefenleiOptions:[],qichefenleiIndex:0,qichepinpaiOptions:[],qichepinpaiIndex:0,tianchuangOptions:[],tianchuangIndex:0,huandangfangshiOptions:[],huandangfangshiIndex:0,zuoweiOptions:[],zuoweiIndex:0,user:{},ro:{mendianzhanghao:!1,mendianmingcheng:!1,qichemingcheng:!1,qichefenlei:!1,qichepinpai:!1,qicheyanse:!1,qichetupian:!1,tianchuang:!1,huandangfangshi:!1,zuowei:!1,qichepailiang:!1,shangshinianfen:!1,shuliang:!1,qichexiangqing:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:c},computed:{},onLoad:function(n){var i=this;return u(t.default.mark((function a(){var r,u,c,o;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.getStorageSync("nowTable"),a.next=3,i.$api.session(r);case 3:return u=a.sent,i.user=u.data,i.ruleForm.mendianzhanghao=i.user.mendianzhanghao,i.ruleForm.mendianmingcheng=i.user.mendianmingcheng,i.qichefenleiOptions="微型车,小型车,紧凑型车,中型车,中高级车,豪华车,商务车,越野车,跑车".split(","),a.next=10,i.$api.option("qichepinpai","qichepinpai",{});case 10:if(u=a.sent,i.qichepinpaiOptions=u.data,i.tianchuangOptions="有天窗,没天窗".split(","),i.huandangfangshiOptions="手动挡,自动挡".split(","),i.zuoweiOptions="2座,4座,5座,7座,其他".split(","),i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=23;break}return i.ruleForm.id=n.id,a.next=21,i.$api.info("chezhan",i.ruleForm.id);case 21:u=a.sent,i.ruleForm=u.data;case 23:if(!n.cross){a.next=98;break}c=e.getStorageSync("crossObj"),a.t0=t.default.keys(c);case 26:if((a.t1=a.t0()).done){a.next=98;break}if(o=a.t1.value,"mendianzhanghao"!=o){a.next=32;break}return i.ruleForm.mendianzhanghao=c[o],i.ro.mendianzhanghao=!0,a.abrupt("continue",26);case 32:if("mendianmingcheng"!=o){a.next=36;break}return i.ruleForm.mendianmingcheng=c[o],i.ro.mendianmingcheng=!0,a.abrupt("continue",26);case 36:if("qichemingcheng"!=o){a.next=40;break}return i.ruleForm.qichemingcheng=c[o],i.ro.qichemingcheng=!0,a.abrupt("continue",26);case 40:if("qichefenlei"!=o){a.next=44;break}return i.ruleForm.qichefenlei=c[o],i.ro.qichefenlei=!0,a.abrupt("continue",26);case 44:if("qichepinpai"!=o){a.next=48;break}return i.ruleForm.qichepinpai=c[o],i.ro.qichepinpai=!0,a.abrupt("continue",26);case 48:if("qicheyanse"!=o){a.next=52;break}return i.ruleForm.qicheyanse=c[o],i.ro.qicheyanse=!0,a.abrupt("continue",26);case 52:if("qichetupian"!=o){a.next=56;break}return i.ruleForm.qichetupian=c[o],i.ro.qichetupian=!0,a.abrupt("continue",26);case 56:if("tianchuang"!=o){a.next=60;break}return i.ruleForm.tianchuang=c[o],i.ro.tianchuang=!0,a.abrupt("continue",26);case 60:if("huandangfangshi"!=o){a.next=64;break}return i.ruleForm.huandangfangshi=c[o],i.ro.huandangfangshi=!0,a.abrupt("continue",26);case 64:if("zuowei"!=o){a.next=68;break}return i.ruleForm.zuowei=c[o],i.ro.zuowei=!0,a.abrupt("continue",26);case 68:if("qichepailiang"!=o){a.next=72;break}return i.ruleForm.qichepailiang=c[o],i.ro.qichepailiang=!0,a.abrupt("continue",26);case 72:if("shangshinianfen"!=o){a.next=76;break}return i.ruleForm.shangshinianfen=c[o],i.ro.shangshinianfen=!0,a.abrupt("continue",26);case 76:if("shuliang"!=o){a.next=80;break}return i.ruleForm.shuliang=c[o],i.ro.shuliang=!0,a.abrupt("continue",26);case 80:if("qichexiangqing"!=o){a.next=84;break}return i.ruleForm.qichexiangqing=c[o],i.ro.qichexiangqing=!0,a.abrupt("continue",26);case 84:if("clicktime"!=o){a.next=88;break}return i.ruleForm.clicktime=c[o],i.ro.clicktime=!0,a.abrupt("continue",26);case 88:if("clicknum"!=o){a.next=92;break}return i.ruleForm.clicknum=c[o],i.ro.clicknum=!0,a.abrupt("continue",26);case 92:if("userid"!=o){a.next=96;break}return i.ruleForm.userid=c[o],i.ro.userid=!0,a.abrupt("continue",26);case 96:a.next=26;break;case 98:i.styleChange();case 99:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},qichefenleiChange:function(e){this.qichefenleiIndex=e.target.value,this.ruleForm.qichefenlei=this.qichefenleiOptions[this.qichefenleiIndex]},qichepinpaiChange:function(e){this.qichepinpaiIndex=e.target.value,this.ruleForm.qichepinpai=this.qichepinpaiOptions[this.qichepinpaiIndex]},tianchuangChange:function(e){this.tianchuangIndex=e.target.value,this.ruleForm.tianchuang=this.tianchuangOptions[this.tianchuangIndex]},huandangfangshiChange:function(e){this.huandangfangshiIndex=e.target.value,this.ruleForm.huandangfangshi=this.huandangfangshiOptions[this.huandangfangshiIndex]},zuoweiChange:function(e){this.zuoweiIndex=e.target.value,this.ruleForm.zuowei=this.zuoweiOptions[this.zuoweiIndex]},qichetupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.qichetupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.qichemingcheng){n.next=3;break}return e.$utils.msg("汽车名称不能为空"),n.abrupt("return");case 3:if(e.ruleForm.qichefenlei){n.next=6;break}return e.$utils.msg("汽车分类不能为空"),n.abrupt("return");case 6:if(e.ruleForm.qichepinpai){n.next=9;break}return e.$utils.msg("汽车品牌不能为空"),n.abrupt("return");case 9:if(e.ruleForm.qicheyanse){n.next=12;break}return e.$utils.msg("汽车颜色不能为空"),n.abrupt("return");case 12:if(!e.ruleForm.shuliang||e.$validate.isIntNumer(e.ruleForm.shuliang)){n.next=15;break}return e.$utils.msg("数量应输入整数"),n.abrupt("return");case 15:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=18;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 18:if(e.ruleForm.userid){n.next=21;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 21:if(!e.ruleForm.id){n.next=26;break}return n.next=24,e.$api.update("chezhan",e.ruleForm);case 24:n.next=28;break;case 26:return n.next=28,e.$api.add("chezhan",e.ruleForm);case 28:e.$utils.msgBack("提交成功");case 29:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,i("543d")["default"])}},[["a98a","common/runtime","common/vendor"]]]);