(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"27ae":function(r,e,o){"use strict";o.r(e);var i=o("55b4"),t=o.n(i);for(var a in i)"default"!==a&&function(r){o.d(e,r,(function(){return i[r]}))}(a);e["default"]=t.a},"3efe":function(r,e,o){"use strict";var i=o("bae9"),t=o.n(i);t.a},"55b4":function(r,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var t=i(o("3b8d")),a=i(o("2971")),n={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.role=uni.getStorageSync("role"),e=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(e);case 4:o=r.sent,this.user=o.data,this.tableName=e,i=a.default.list(),this.menuList=i;case 9:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),onShow:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return uni.removeStorageSync("useridTag"),this.role=uni.getStorageSync("role"),e=uni.getStorageSync("nowTable"),r.next=5,this.$api.session(e);case 5:o=r.sent,this.user=o.data,this.tableName=e,i=a.default.list(),this.menuList=i;case 10:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{onPageTap:function(r){uni.setStorageSync("useridTag",1),uni.navigateTo({url:r,fail:function(){uni.switchTab({url:r})}})}}};e.default=n},"799a":function(r,e,o){var i=o("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0418fc18]{background-color:#fff}.content[data-v-0418fc18]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.header[data-v-0418fc18]{background-color:#ff6364;width:100%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-0418fc18]{padding-top:0}.header .userinfo[data-v-0418fc18]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .userinfo .face[data-v-0418fc18]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw;overflow:hidden}.header .userinfo .face uni-image[data-v-0418fc18]{width:100%;height:100%}.header .userinfo .info[data-v-0418fc18]{-webkit-flex-flow:wrap;flex-flow:wrap}.header .userinfo .info .username[data-v-0418fc18]{width:100%;color:#fff;font-size:%?40?%;margin:%?8?% 0}.header .userinfo .info .integral[data-v-0418fc18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?8?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%;margin:%?8?% 0}.header .setting[data-v-0418fc18]{-webkit-flex-shrink:0;flex-shrink:0}.header .setting uni-image[data-v-0418fc18]{width:100%;height:100%}.hover[data-v-0418fc18]{background-color:#eee}.orders[data-v-0418fc18]{background-color:#ff6364;width:100%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-0418fc18]{width:100%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-0418fc18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-0418fc18]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-0418fc18]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-0418fc18]{width:7vw;height:7vw;z-index:9}.list[data-v-0418fc18]{width:100%;border-bottom:solid %?26?% #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .li[data-v-0418fc18]{width:100%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;font-size:%?33?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .li.noborder[data-v-0418fc18]{border-bottom:0}.list .li .icon[data-v-0418fc18]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-0418fc18]{width:%?50?%;height:%?50?%}.list .li .text[data-v-0418fc18]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-0418fc18]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-0418fc18]{background-color:#fff}',""]),r.exports=e},bae9:function(r,e,o){var i=o("799a");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var t=o("4f06").default;t("62617f6d",i,!0,{sourceMap:!1,shadowMode:!1})},bb03:function(r,e,o){"use strict";var i,t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"header",class:{status:r.isH5Plus},style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(242, 188, 133, 1)",borderRadius:"0 0 240rpx 240rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"400rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../user-info/user-info")}}},["maijia"==r.tableName?o("v-uni-view",{staticClass:"userinfo",style:{padding:"0 24rpx",boxShadow:"14rpx 14rpx 0px 0px rgba(255,255,255,0.39)",margin:"40rpx 10%",borderColor:"rgba(255, 255, 255, 0.02)",backgroundColor:"rgba(251, 238, 224, 1)",borderRadius:"0",borderWidth:"14rpx 0 0 14rpx",width:"80%",borderStyle:"solid",height:"300rpx"}},[o("v-uni-view",{staticClass:"info"},[o("v-uni-view",{staticClass:"username",style:{padding:"0",boxShadow:"0 0 16rpx rgba(255,255,255,0)",margin:"6rpx 0",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v(r._s(r.user.maijiazhanghao)),r.user.vip&&"是"==r.user.vip?o("v-uni-text",[r._v("(VIP)")]):r._e()],1),r.user.money?o("v-uni-view",{staticClass:"integral",style:{padding:"0",boxShadow:"0 0 0px rgba(255,255,255,.3)",margin:"6rpx 0",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v("余额："+r._s(r.user.money))]):r._e(),r.user.jf||0==r.user.jf?o("v-uni-view",{staticClass:"integral",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"6rpx 0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v("积分："+r._s(r.user.jf))]):r._e()],1)],1):r._e(),"yonghu"==r.tableName?o("v-uni-view",{staticClass:"userinfo",style:{padding:"0 24rpx",boxShadow:"14rpx 14rpx 0px 0px rgba(255,255,255,0.39)",margin:"40rpx 10%",borderColor:"rgba(255, 255, 255, 0.02)",backgroundColor:"rgba(251, 238, 224, 1)",borderRadius:"0",borderWidth:"14rpx 0 0 14rpx",width:"80%",borderStyle:"solid",height:"300rpx"}},[o("v-uni-view",{staticClass:"info"},[o("v-uni-view",{staticClass:"username",style:{padding:"0",boxShadow:"0 0 16rpx rgba(255,255,255,0)",margin:"6rpx 0",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v(r._s(r.user.zhanghao)),r.user.vip&&"是"==r.user.vip?o("v-uni-text",[r._v("(VIP)")]):r._e()],1),r.user.money?o("v-uni-view",{staticClass:"integral",style:{padding:"0",boxShadow:"0 0 0px rgba(255,255,255,.3)",margin:"6rpx 0",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v("余额："+r._s(r.user.money))]):r._e(),r.user.jf||0==r.user.jf?o("v-uni-view",{staticClass:"integral",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"6rpx 0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[r._v("积分："+r._s(r.user.jf))]):r._e()],1)],1):r._e(),o("v-uni-view",{staticClass:"setting"},[o("v-uni-view",{staticClass:"cuIcon-settings",style:{padding:"0 10rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(75, 48, 48, 0.28)",borderRadius:"50%",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"52rpx",lineHeight:"52rpx",fontSize:"32rpx",borderStyle:"solid"}})],1)],1),o("v-uni-view",{staticClass:"list",style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"24rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r._l(r.menuList,(function(e){return[r._l(e.backMenu,(function(i,t){return r.role==e.roleName?[r._l(i.child,(function(e,i){return["yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName&&"exampaper"!=e.tableName&&"examquestion"!=e.tableName?o("v-uni-view",{key:i+"_0",staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(o){arguments[0]=o=r.$handleEvent(o),r.onPageTap("../"+e.tableName+"/list?userid="+r.user.id)}}},[o("v-uni-view",{class:e.appFrontIcon,style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(e.menu))]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1):r._e()]}))]:r._e()}))]})),o("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../shop-recharge/pay-confirm")}}},[o("v-uni-view",{staticClass:"cuIcon-moneybag",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户充值")]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1),o("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../forum-add-or-update/forum-add-or-update")}}},[o("v-uni-view",{staticClass:"cuIcon-scan",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("我要发贴")]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1),o("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../forum-my/forum-my")}}},[o("v-uni-view",{staticClass:"cuIcon-scan",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("我的发贴")]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1),o("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../shop-cart/shop-cart")}}},[o("v-uni-view",{staticClass:"cuIcon-cart",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("购物车")]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1),o("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",backgroundColor:"rgba(242, 188, 133, 1)",borderColor:"rgba(126, 102, 90, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onPageTap("../shop-order/shop-order")}}},[o("v-uni-view",{staticClass:"cuIcon-order",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 16rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"30rpx",lineHeight:"30rpx",fontSize:"30rpx",borderStyle:"solid"}}),o("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 134rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("我的订单")]),o("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0 44rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(126, 102, 90, 1)",color:"rgba(255, 255, 255, 1)",isShow:!0,borderRadius:"0 20rpx 20rpx 0",borderWidth:"0",width:"28rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}})],1)],2)],1)},a=[];o.d(e,"b",(function(){return t})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}))},d2c0:function(r,e,o){"use strict";o.r(e);var i=o("bb03"),t=o("27ae");for(var a in t)"default"!==a&&function(r){o.d(e,r,(function(){return t[r]}))}(a);o("3efe");var n,d=o("f0c5"),l=Object(d["a"])(t["default"],i["b"],i["c"],!1,null,"0418fc18",null,!1,i["a"],n);e["default"]=l.exports}}]);