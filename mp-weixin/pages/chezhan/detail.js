(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chezhan/detail"],{"2a9f":function(t,e,n){"use strict";(function(t){n("9981"),n("921b");a(n("66fd"));var e=a(n("a4db"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2ee7":function(t,e,n){},"32e1":function(t,e,n){"use strict";var a=n("2ee7"),i=n.n(a);i.a},"469d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,i,s,r){try{var u=t[s](r),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(a,i)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function u(t){s(r,a,i,u,c,"next",t)}function c(t){s(r,a,i,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=r(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=r(a.default.mark((function e(n){var i,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),i=t.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:s=e.sent,this.user=s.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){window.clearInterval(this.inter)},methods:{onPayTap:function(){t.setStorageSync("paytable","chezhan"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},shoucang:function(){var e=r(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否收藏",success:function(){var t=r(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=4;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.qichemingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"chezhan"});case 3:n.$utils.msg("收藏成功");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e){t.setStorageSync("crossTable","chezhan"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=r(a.default.mark((function t(){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("chezhan",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.qichetupian?this.detail.qichetupian.split(","):[],this.detail.qichexiangqing=this.detail.qichexiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(a.default.mark((function t(e){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discusschezhan",{page:e.num,limit:e.size,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discusschezhan/add-or-update?refid=".concat(this.id))},zan:function(){var e=r(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=r(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=4,n.$api.update("chezhan",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=r(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=r(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=4,n.$api.update("chezhan",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("chezhan",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},"60a1":function(t,e,n){"use strict";n.r(e);var a=n("469d"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},a4db:function(t,e,n){"use strict";n.r(e);var a=n("ae4d"),i=n("60a1");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("32e1");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},ae4d:function(t,e,n){"use strict";var a={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"8512"))},"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"ac60"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("chezhan","预约试驾"));t.$mp.data=Object.assign({},{$root:{m0:n}})},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))}},[["2a9f","common/runtime","common/vendor"]]]);